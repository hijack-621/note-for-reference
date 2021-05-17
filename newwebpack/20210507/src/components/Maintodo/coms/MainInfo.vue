<template>
    <div class='info'>
        <span class='shownum'><b>{{ total }}</b> item pended</span>
        <div class="cate">
            <a  v-for="(item,index) in cates" :key='index' :class="[cate==item?'actived':'']" @click="change(item)">{{ item }}</a>
           
        </div>
        <button class='btn' @click="Clear">Clear Completed</button>
    </div>
</template>

<script>
export default {
    name:'todoinfo',
    data(){
        return {
            cates:['all','pending','completed'],
            cate:'all',
        }
    },
    props:{
        total:Number
    },
    methods:{
        change(cate){
            this.cate = cate;
            this.$emit('showBycate',cate);    
        },
        Clear(){
            this.$emit('removeCompleted')
        }
    }
    //props:['total']//两种写法都可以！！！
}
</script>

<style lang="stylus" scoped>
@import '~css/base.styl'
@import '~css/mixin.styl'
.info
    display flex 
    justify-content space-between
    padding:5px 24px
    line-height 20px
.shownum
    color:$red
    font-weight 100
    // test(yellow,true)
.cate
    display flex 
    justify-content space-between
    width 230px
    a 
        text-decoration none
        border 1px solid #ccc
        border-radius 5px
        padding 0px 10px
        font-weight 350
        cursor pointer
        &.actived
            background-color #DAA520
            color #fff
.btn
    RemoveDefault()
    background-color #BDB76B
    color #fff
    border-radius 5px
    padding 5px
</style>