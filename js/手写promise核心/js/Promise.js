class HPromise {
    static PENDING = 'pending';//固定值，定义为静态属性
    static FULFILLED = 'filfulled';
    static REJECTED = 'rejected';

    constructor(executor){
        this.satus = HPromise.PENDING; //new promise 默认为pending状态 值为null
        this.value = null;
        try { //因为promise 原生就是只要发生错误就会走reject 所以这个要尝试执行，出错就执行 this.reject()
            executor(this.resolve.bind(this),this.reject.bind(this)); //改变this指向，绑定this指向这个类，【因为实例化的时候传递的一个回调函数，this在全局函数中，指向就是window，严格模式下就是undefined】
        } catch (error) {
            this.reject(error); //出错直接reject
        }
       
    }

    resolve(value){
        if(this.status == HPromise.PENDING){ //规定只有 pending状态才可以修改状态
            this.value = value; 
            this.status = HPromise.FULFILLED;
        }
       
    }
    reject(reason){
        if(this.status == HPromise.Pending ){
            this.value = reason;
            this.status = HPromise.REJECTED;
        }
       
    }
}
