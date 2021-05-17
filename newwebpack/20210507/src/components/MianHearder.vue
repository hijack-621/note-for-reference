<template>
    <header>
        <h1>TodoList</h1>
    </header>
</template>

<script>
export default {
    name:'MainHeader',
}
</script>
<style lang="stylus" scoped>
    @import '~css/base.styl'
    header
        text-align:center
        margin-top:30px
        h1
            font-size 48px
            color:$white
            text-shadow:5px 5px 5px  rgba(0,0,0, 0.1);
            margin:15px 
</style>