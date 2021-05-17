/* 项目入口文件
1.创建vue实例
2.挂载APP组件
*/
import Vue from 'vue'
import App from './App.vue'
new Vue({
    el: '#app',
    components: {
        App,
    },
    template: '<App/>',

})