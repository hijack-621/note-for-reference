import VueRouter from 'vue-router'
import account from './Account.vue'
import goodlist from './Goodlist.vue'
import login from './login.vue'
import register from './register.vue'

let router = new VueRouter({
    routes:[
        {path:'/account', component:account,children:[ //children 子路由
            {
                path:'login',
                component:login,
            },
            {
                path:'register',//子路由path不需要加上 ‘/’
                component:register
            }
        ] },
        {path:'/goodlist', component:goodlist},
    ]
})

export default router