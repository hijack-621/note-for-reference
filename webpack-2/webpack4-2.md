## 打包多页应用 
    ### webpack.config.js 里面 entry，output参数传入对象，


## 配置source-map
    ###  webpack.config.js 中配置 devtool参数
    //devtool 有四种配置【source-map: 单独生成一个source-map文件，代码出错会显示具体行具体位置出错
    //cheap-module-source-map:不会单独生成文件，出错显示具体行和具体位置
    //eval-source-map:会产生映射map文件，但是只会提示出错行，不提示改行具体哪里出错
    //cheap-module-eval-source-map:集成在打包文件中，出错显示具体行，不报错具体位置】

## 使用watch属性来控制webpack自动打包
    //监控 实时打包   类似vue里边那个实时监控watch函数的
    watch: true,
    //监控的选项
    watchOptions: {
    poll: 1000, //每秒询问1000次，是否需要打包
    aggregateTimeout: 500 ,//防抖 （类似于函数防抖，也就是不能每次输入一个单词就打包一次，要实现输入完毕，后过多久才开始打包）
    ignored: /node_modules/ //忽略哪个文件不去监听打包
    }, 

## webpack 实用插件
    1) clean-webpack-Plugin【npm install clean-webpack-plugin】  可以每次先将目标文件夹删除后再生成打包后的新的目标文件夹，避免文件重复冗余
        语法: 引入：const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
              plugins：属性中实例化 new CleanWebpackPlugin()

    2)copy-webpack-plugin [npm install copy-webpack-plugin], 用于将指定文件夹下的文件copy到打包后的目标文件夹下
        还是引入 加 new 实例  
         new 实例({
            patterns:[
                {from:'./doc', to:'./'},
                {from:'./doc1', to:'./'},copy多个就配置多个对象
            ]
        })

    3)bannerpkugin ，是webpack内置的一款版权声明插件
        先引入 webpack 
        在new webpack.BannerPlugin('声明文字')  

## webpack 跨域
    第一种【服务端，客户端兼备】总的来说都是先去请求webpack-dev-server，让webpack-dev-server充当一个中转，转而去请求不同域名下的网址  
    1-1):在webpack.config.js 下 devServer:{} 服务器属性下 配置 proxy代理 proxy:{'/api':'http://localhost:4000'}，表示请求/api开头的地址都代理到4000端口
    【//webpack 内置了 express 可以直接用   模拟服务器端
    let express = require('express')
    let app = new express()

    app.get('/api/test', function(req, res){
        res.json({test:'webpack内置express测试'})
    })

    app.listen(4000)】

    【let xhr = new XMLHttpRequest()       模拟客户端
    xhr.open('GET', '/api/test', true) //开启异步
    // 请求express  监听的3000 端口下的 /api/test,而webpack-dev-server默认是8080端口
    //请求3000端口就会产生跨域，默认请求不到
    //我们可以先去请求webpack-dev-server,让webpack充当中转，转而去请求3000就实现了跨域
    xhr.onload = function () {
        console.log(xhr.response);
    }
    xhr.send() //发送ajax请求】


    1-2)然而有时候服务器端 有时候并不会写全get请求路径，例如：【app.get('/test', function(req, res){】前面的大的方向【/api省略掉了】
    我们还想能通过 【 xhr.open('GET', '/api/test', true)】 来请求到 ，可以采用rewrite方式  ，当你请求/api开头的时候，将/api重写为''
    【
        devServer:{  //服务器配置
            proxy:{
                // '/api':'http://localhost:4000' //表示请求 /api 开头的 url地址，就转到4000端口
                '/api':{
                target:'http://localhost:4000' , 
                pathRewrite:{'/api':''}//将/api重写为''
                }
            }
        },
    】

    2)【不要服务端】 直接使用webpack 内置的express 然后在devServer:{}使用 before()方法， 方法内部写上express 的get  post请求
    xhr.open('GET', '/test', true)//访问webpack内置的express 第二个参数 与 webpack.config.js devServer中一致 
    【 before(app) {
            app.get('/test', function(req, res){
                res.json({test:'webpack内置express测试,chongxie  neizhi express'})
            })
        }
    】

    3)【同样服务端，客户端兼备】  在服务端中启动webpack，端口用服务器端口，上面两种都只是服务器端提供数据，
        这种方式需要用到webpack和webpack的中间件插件 【webpack-dev-middleware】,
        在发送进行路由匹配之前，将webpack.config.js 交给webpack模块处理【require webpack-config-js】
        在将处理后的结果交给 中间件 middleware的处理，最后给 express 的对象使用

        这种方式的话，webpack.config.js 里面所涉及的文件操作都需要经过path模块处理成绝对路径，因为 node中所有的文件操作，相对路径都是基于
        运行node代码的那个执行路径！  不然启动会报错文件，模块找不到

## resolve属性 用于配置 解析第三方包的一些参数
    modules:[] 指定查找路径，默认commonjs 规范是先去当前路径下的node_modules找，找不到往上一级的node_modules找，直至磁盘根目录
    extensions:['.css'，'.js'，'.vue'，]，指定匹配文件后缀名，也就是设置后，使用import 语法时，可以不指定引入包的后缀名，系统会去按css.js.vue顺序去添上后缀后再去查找，找到就引入
    mainFields:[’style‘,'main'] ,指定默认引入的文件  比如  默认 import bootstrap from ’bootstrap‘ 时【本意是想引入css的】，默认是先去找 bootstrap.js ，因为 bootstrap 规定了先去找 main script短语  ’main‘:’bootstrap/dist/js/bootstrap.js‘，css script 短语是 "style":'’bootstrap/dist/css/bootstrap.css‘'; 于是引入了js文件，如果设置了 【mainFields:[’style‘,'main']】，默认就回去先找 style短语，找不到再找main短语，
    mainFiles:[] 入口文件名字，默认 index.js
    alias:{} 设置别名   上面 import bootstrap from ’bootstrap‘ 时【本意是想引入css的】 为了避免先引入js 可以这么写  import bootstrap from bootstrap/dist/css/bootstrap.css‘，但是这样写太长了  可以吧  ’bootstrap/dist/css/bootstrap.css‘起个别名 为bootstrap {
        ’bootstrap‘：’bootstrap/dist/css/bootstrap.css‘
    }


##使用 webpack自带的 DefinePlugin插件来 区分 开发环境还是生产环境
    webpack.config.js plugin 属性中，new webpack实例 .DefinePlugin({
        key:val,
        key2:val2,
    }) 这里面定义的变量都是全局的  可以直接在js中使用,但是需要注意的是  如果这样定义 { test1:'test1' | test2:"test2"}，使用单引号或者双引号传值时，系统默认会将 test1或者test2 直接当成变量去声明为全局变量，而不是当做test1或者test2变量的值，所以js中引入这个test1或者test2会报错未定义
    要么{test:"'test'"}将单引号用双引号包裹传递，要么 用test1:JSON.stringify('test')去传递【建议这种方式】，

    有了这种方式我们就可以去定义 变量，js根据变量来响应不同的url地址【localhost本地开发域名 还是 生产域名】 ，但是每次去修改变量为生产还是开发就有点繁琐了且不那么自动化了   

## 使用 webpack-merge 【npm install webpack-merge】 插件来配置生产和开发环境  然后打包的时候传入参数  -- --config + 生产/开发 环境配置文件
    //webpack.pro.js  //为生产环境单独建一个配置文件
    let {smart} = require('webpack-merge')
    let base = require('./webpack.config.js') //第二个参数 里可以写一些跟base 参数相同的配置
    module.exports = smart(base,{
        mode:'production'
    })
    
    //webpack.dev.js //为开发环境单独建一个配置文件
    let {smart} = require('webpack-merge')
    let base = require('./webpack.config.js')
    module.exports = smart(base,{
        mode:'development',
        
    })