<template>
  <div class="hello">
    Hello, Akin
    <ul>
      <li v-for="item in arr">{{item}}</li>
    </ul>
    <el-row>
      <el-input
        type="textarea"
        :rows="4"
        v-on:onscroll="handleScroll"
        @change="handleChange"
        @blur="handleBlur"
        @keyup.native="getInputValue($event)"
        placeholder="请输入内容"
        v-model="areaValue" class="textarea-line-height">
      </el-input>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        arr: [1, 2, 3, 4],
        areaValue: ''
      }
    },
    methods: {
      handleScroll () {
        console.log('scroll')
      },
      handleChange(val) {
        console.log('===', val)
      },
      handleBlur(event) {
        let value = event.target.value
        // console.log('value==', value.toString())
      },
      getInputValue(event) {
        console.log('event Y', event)
        let arr = this.areaValue.split('\n')
        console.log('last', _.last(arr))
      },
      timeout(ms) {
        return new Promise((resolve, reject) => {
          console.log('Promise') // Promise 新建后就会立即执行
          setTimeout(resolve, ms, 'done');
        });
      },
      promise1 () {
        return new Promise(function (resolve, reject) {
          console.log('p1')
          setTimeout(() => reject(new Error('fail')), 3000)
        })
      },
      promise2 () {
        let p1 = this.promise1()
        return new Promise(function (resolve, reject) {
          console.log('p2')
          setTimeout(() => resolve(p1), 1000)
        })
      }
    },
    mounted() {
      // let chunkArr = _.chunk(this.arr, 2)
      // console.log('chunkArr => ', chunkArr)
      //
      // // filter (false, null, 0, "", undefined, 和 NaN)(假值)
      // let trueValueArr = _.compact([0, 1, false, 2, '', 3]);
      // console.log('without false value =>', trueValueArr)
      //
      //
      // // return new array (这个方法会返回一个新数组, 顺序依据第一个数组)
      // let differentArr = _.difference([3, 2, 1], [4, 2])
      // console.log('differentArr =>', differentArr)

      // this.timeout(2000).then((value) => {
      //   console.log(value)
      // })
      // console.log('Hi~~~') // 同步代码块先执行 再执行then()里的代码

      // const p1 =

      const p2 = this.promise2()

      p2.then(result => console.log(result))
        .catch(error => console.log(error))
    }
    ,
    watch: {
      // areaValue: function (newVal, oldVal) {
      //   console.log('watch',  newVal)
      //   let arr = this.areaValue.split('\n')
      //   console.log('last', _.last(arr))
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
