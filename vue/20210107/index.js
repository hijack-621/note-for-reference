import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入所有的mint ui 组件
import MintIU from 'mint-ui'

import 'mint-ui/lib/style.css'
//将mint ui 挂载到vue中
Vue.use(MintIU)
import template from './App.vue'
import router from './router.js'

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