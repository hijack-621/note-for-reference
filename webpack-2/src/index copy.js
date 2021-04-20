// import a from './a.js'
// import b from './b.js'
// console.log('index')
// import jquery from 'jquery'

//import calc from './test.js'
//test 代码【let sum = (a,b) => {
//     return a + b + 'sum'
// }

// let sub = (a, b => {
//     return a - b + 'sub'
// })

// export default{
//     sum,sub
// }】

//console.log(calc.sum(2,6)) 输出8sum
//【如果是 let calc = require('./test')】 console.log(calc.sum(2,6)) 直接拿sum方法会报错，因为 在es6中，require模块所返回的是一个对象，所有的方法
//都会被挂载到default上  所以  需要 console.log(calc.default.sum(2,6)) 拿结果

//console.log(calc.sum(2,6)) 只用到了 sum方法，而sub方法没用到，
//webpack 自带了优化功能，如果你设置的mode为生产模式，那么webpack打包的时候会将没用到的代码剔除以减小压缩体积 ---这种工作模式 专业术语 --- tree-shaking

//还有一个 工作模式  同样只在生产模式下生效 
/**
 * 假如有一段这样的代码：
 * let a=1;
 * let b=2;
 * let c=3;
 * let d = a+b+c;
 * cosole.log(d)
 * 生产模式下打包，webpack会直接将代码优化为console.log(6),而不会重复，机械的去打包这种很无意义，重复声明的的工作 
 * 这种工作模式叫 scope hosting 作用域提升
 */



// import React from 'react'
// import { render } from 'react-dom' 

// render(<h1>react ceshi</h1>,window.root)
//表示通过 @babel/prest-react 插件解析react语法  将 render中h1 内容 渲染到 页面 id为root的dom中去


//默认 import 一个包的话，webpack打包的时候回去解析这个包，并且打包到目标文件中去
//可以在module属性中配置 noParse属性：noParse:'/jquery/'
//这样打包的时候就不会去解析jquery然后打包了
// import jquery from 'jquery'

//  import moment from 'moment'

//  import 'moment/locale/zh-cn'

//  let time = moment().endOf('day').fromNow() //表示离一天结束还有多少小时 
// console.log(time)


//  class A{
//      constructor(){
//          console.log('aaaaabbb')
//      }
//  }
//  let a = new A()

// let xhr = new XMLHttpRequest()
// //xhr.open('GET', '/api/test', true) //开启异步

// xhr.open('GET', '/test', true)//访问webpack内置的express 第二个参数 与 webpack.config.js devServer中一致
// // 请求express  监听的3000 端口下的 /api/test,而webpack-dev-server默认是8080端口
// //请求3000端口就会产生跨域，默认请求不到
// //我们可以先去请求webpack-dev-server,让webpack充当中转，转而去请求3000就实现了跨域
// xhr.onload = function () {
//     console.log(xhr.response);
// }
// xhr.send() //发送ajax请求
//console.log(test)
// console.log(test2)

