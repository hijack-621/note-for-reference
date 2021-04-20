/* 具名导出  */
export let a = "2.js";//单独导出

function show(){
    console.log('2.js的show方法');
}

class User {
    static s2how(){
        return '类静态方法';
    }
}
export {show,User};//批量导出 都可