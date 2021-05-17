<template>
    <div>
       <main-header></main-header>
       <main-todo></main-todo>
       <main-footer></main-footer>
    </div>
</template>
<script>

import './static/css/test.styl'

import MainHeader from './components/MianHearder.vue'
import MainTodo from './components/Maintodo/MainTodo.vue'
import MainFooter from './components/MainFooter.vue'

export default {
    name:'App',
    components:{
        MainHeader:MainHeader,
        MainTodo,
        MainFooter,
    }
}
</script>
<style scoped lang="stylus">
       
</style>
