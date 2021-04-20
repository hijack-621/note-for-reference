
//import $ from 'jquery'  //es6语法  相当于 require（引入 jquery模块），并默认导出
//console.log(window.$) //输出undefined  默认模块作用域不是全局作用域，可以使用 expose-loader将 import的对象暴露给全局
//暴露给全局
import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery' //内联使用 还可以在webpack.config.js中配置,注意内联和配置文件中 这两种方式只能使用一个，不可同时使用
console.log(window.$)

//图片处理插件 file-loader,默认会生成一张图片到设定的目标文件夹下
import img from './img.jpg' //引入图片，返回一个新得图片地址
console.log(img)

let image = new Image();
image.src = img //这里写相对路径不会生效，因为没有特殊处理，在目标文件夹下不会生成的有 给定的路径下的图片
document.body.appendChild(image)


// let temp = require('./app.js')
// console.log("hello webpack")
// console.log(temp)
// require('./index.css')//把 css文件当做模块来引入，前提配置要到位，不然报错
// require('./test.less')

// let fn = ()=>{ //箭头函数相当于匿名函数【有区别】，并且简化了函数定义
//     console.log('这是es6新增语法')
// }

// fn()
// @log //修饰器其实就是个函数
// class A{
//     a=1
// }
// let a = new A()
// console.log(a.a)


// function log(target){ //对应@log
//     console.log(target)
// }
// require('@babel/polyfill') //会在array.prototype上添上这个includes方法
// //更高级的语法
// 'AAA'.includes('A')//判断实例是否包含A 
// //默认webpack是无法解析并转成低阶语法的，只会原样输出 可以使用 @babel/polyfill
// //并且在哪个js里需要解析就需要在哪个js中require引用，而不是在webpack.config.js中配置【至少目前学到是这样】
