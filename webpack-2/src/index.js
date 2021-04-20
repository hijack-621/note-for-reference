// let button = document.createElement('button')
// button.innerHTML = '点我测试懒加载'
// button.addEventListener('click', ()=>{
//     //https://www.cnblogs.com/Joe-and-Joan/p/10309419.html
//     //import()返回一个 Promise 对象
//     import('./source.js').then(data=>{
//         //解析这个语法需要用到 npm install @babel/plugin-syntax-dynamic-import -D 这个babel库，还要配置
//         console.log(data.default)
//         //导出的方法或者数据会挂载到default属性上
//     })
// })
// document.body.append(button)


//热更新
import src from './source.js'//import只能写在业务逻辑顶部
console.log(src)
if(module.hot){
    module.hot.accept('./source.js', ()=>{
        let str = require('./source.js')
        console.log(str)
        console.log('jinlaile1?')
    })
}

// import str from './source.js'
// console.log(str)
// if(module.hot) {
//   module.hot.accept('./source.js',()=>{
//     //import只能写在页面的顶端
//     let str = require('./source.js')
//     console.log(str.default)
//   })
// }