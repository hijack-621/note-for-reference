<template>
    <div class='main'>
        <input type="text" class='main-input' placeholder="what to do?" v-model="content" autofocus @keyup.enter="addtodoItem">
        <todo-item v-for="(item,index) in filterData" :key="index" :tomainitem='item' @delete="handleDel" ></todo-item>
        <todo-info :total="total" @showBycate="changetodoData" @removeCompleted="handleremove"></todo-info>
    </div>
</template>

<script>
import TodoItem from './coms/MainItem.vue'
import TodoInfo from './coms/MainInfo.vue'
let id = 0
export default {
    name:'MainTodo',
    data(){
        return {    
            todoData:[],
            content:'',
            total:0,
            filter:'all',
        }
    },
    methods:{
       addtodoItem(){
           if( this.content==='') return false;
           this.todoData.unshift({
               id:id++,
               content:this.content,
               completed:false,
           });
           this.content=''
       },
       handleDel(id){
           this.todoData.splice( this.todoData.findIndex(item=> item.id==id),1  )
       },
       changetodoData(cate){
           this.filter = cate
       },
       handleremove(){
           this.todoData = this.todoData.filter(item=>item.completed==false);
       },

    },
    watch:{
        todoData:{
            deep:true,
            handler(){
                this.total = this.todoData.filter(item=> item.completed==false).length
            }
        }

    },
    computed:{
       filterData(){
           switch(this.filter){
               case 'all':
                   return this.todoData
                   break
                case 'pending':
                    return this.todoData.filter(item=>item.completed == false)
                    break       
                case 'completed':
                    return this.todoData.filter(item=>item.completed)
                    break
           }
       }
    },
    components:{
        TodoItem,
        TodoInfo,
    }
}
</script>
<style lang="stylus" scoped>
.main
    width:600px
    margin:0 auto 
    background:#fff
    box-shadow:5px 5px 5px rgba(255,255,255,.2)
    .main-input
        width:100%
        font-size:24px
        font-weight:inherit
        font-family:inherit
        border:none
        outline:none 
        color:inherit
        padding:12px 12px 12px 18px;
        box-sizing:border-box
</style>