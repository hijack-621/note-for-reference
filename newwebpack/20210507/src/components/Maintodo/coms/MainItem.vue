<template>
    <div :class="['todo-item',tomainitem.completed?'completed':'']">
        <input type="checkbox" class="ck" v-model="tomainitem.completed">
        <label class="ltwo">{{ tomainitem.content }}</label>
        <button class="bn" @click="del"></button>
    </div>
</template>

<script>
export default {
    name:'mainItem',
    props:{
        tomainitem:Object,
    },
    methods:{
        del(){
            this.$emit('delete',this.tomainitem.id);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/mixin.styl'
.completed
    .todo-item label
        text-decoration line-through
        font-weight 100                           
.todo-item
    display flex
    jusitfy-content space-between
    align-items center
    padding 10px
    font-size 24px
    border-bottom:1px solid rgba(0,0,0,.1)
    &:hover
        button:after
            content:'x'
            font-size:24px
            color:$red
    &.completed
        label
            color #d9d9d9
            text-decoration line-through
    label 
        flex 1
        transition:color .5s ease
        

    input 
        RemoveDefault()
        height 30px
        width 50px
        text-align center
        position relative
        &::before
            content:url('~images/unchecked.svg')
            line-height 50px

          
            
        &:checked::before
            content:url('~images/checked.svg')    
        &:checked
            // &~label //这是一种方法，当checkbox选中时，找到其紧挨着的label 加上样式，第二种方法，样式绑定，根据pros接收传过来的tomainitem的completed判断加上样式
            //     text-decoration line-through            
    button 
        RemoveDefault()
        width 40px
        background-color transparent
        cursor pointer
</style>