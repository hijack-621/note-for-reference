// import Vue from 'vue/dist/vue.js'
/**
 * 直接引入最全的vue库，语法就和开始学的网页端一致
 */
// let vm = new Vue({
//     el:'#app',
//     data:{
//         msg:'123'
//     }
// })
 //使用 runtime-only 的vue库来实现 渲染组件
 //只能使用 render:function (cm) 而不能去components中注册

import Vue from 'vue'
import VueRouter from 'vue-router'
import template from './App.vue'
import account from './Account.vue'
import goodlist from './Goodlist.vue'
import login from './login.vue'
import register from './register.vue'
Vue.use(VueRouter)


let vm = new Vue({
    el:'#app',
    data:{
        msg:'hello vue',
    },
    render:function (cm) {
       return cm(template) 
    },
    router


})

//上面这种写法  可以  优化，可以单独建一个router.js 文件，存放路由操作，只不过 在index.js中要想拿到这个router对象，
//除了 import router from './router.js'之外， router.js 本身需要导出router对象【export default router】，
//只有你愿意给别人，别才能合法拿到你的东西，否则非法获取就报错！！！
