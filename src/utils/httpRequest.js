import axios from 'axios';
import Cookies from "vue-cookies";

axios.defaults.withCredentials = true;
axios.defaults.retry = 2; // maximum time
axios.defaults.retryDelay = 1000; // (ms)

// add request interceptors
axios.interceptors.request.use(config => {

    let jwtToken = Cookies.get('JWT-TOKEN');
    if (jwtToken) {
        config.headers['Token'] = jwtToken
    }
    return config;
}, error => {
    console.log('error')
    return Promise.reject(error);
});

// http response interceptor
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    });

function get(url, params) {
    return axios.get(url, {
        params: {
            t: new Date().getTime(),
            ...params
        }
    });
}

function post(url, params) {
    return axios.request({
        url: url,
        method: 'POST',
        data: params
    });
}

export {
    get,
    post
};