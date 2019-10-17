import { post, get } from '../utils/httpRequest';

async function login (params) {
  const url = `/api/user/login`;
  const body = await post(url, params);
  console.log('==', body)
  return body.data;
}

async function getUserList () {
  const url = `/api/user/users`;
  const body = await get(url);
  console.log('==', body.data)
  return body.data;
}

export {
  login,
  getUserList
};
