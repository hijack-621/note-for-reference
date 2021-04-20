
## 样式文件，默认webpack和nodejs都不认识，不支持以require方式引入，需要去安装配置对应的解析器
    ### 在 webpack.config.js中配置 module 参数
    module:{//模块
        rule:[
            {rule1},
            {rule2},...可以配置多个rule来读取html图片，css,js等静态资源，而且rule1等有多种写法！！！
        ]
    }

## npm 安装插件 参数-D  通俗理解就是直接想要代码里用，就不加-D，在配置里面用就加

## 处理js模块
    ###有时候我们的js代码采用的es6语法，有的地低版本浏览器不支持es6语法，可以采用【babel-loader @babel/core @babel/presen-env 等插件协作】【webpack.config.js中要配置】将es6转成es5语法,某些情况下，需要优化或者处理一些模块调用时候，还需要用到【@babel/plugin-transform-runtime  @babel/runtime】 插件，帮助编译和压缩代码体积
    ###
    require('@babel/polyfill') //会在array.prototype上添上这个includes方法
    //更高级的语法
    'AAA'.includes('A')//判断实例是否包含A 
    //默认webpack是无法解析并转成低阶语法的，只会原样输出 可以使用 @babel/polyfill
    //并且在哪个js里需要解析就需要在哪个js中require引用，而不是在webpack.config.js中配置【至少目前学到是这样】

    ###校验js语法是否符合规范【webpack.config.js module参数中配置rule】【需要 eslint 和eslint-loader这两个插件 npm安装】

## 全局变量的引入，【页面的window对象，document对象等】
方式一：import $ from 'jquery'  //es6语法  相当于 require（引入 jquery模块），并默认导出
console.log(window.$) //输出undefined  默认模块作用域不是全局作用域，可以使用 expose-loader将 inport的对象暴露给全局
内联loader【直接在代码里使用，不去配置文件中配置】 语法为：import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery'
    ### |？号 类似于get方式传参数的?号，|exposes[]=$ 表示将 jquery导出后的代称为$ | &exposes[]=jQuery!jquery 就表示要导出的模块
    此方式隐藏一个缺点，如果你页面中以cdn方式引入了jquery的话，再次import jquery的话，默认webpack就会把jquery打包，导致生成的js很大，此时就需要
    配置
    externals:{
        jquery:'JQuery' //如果注入了方式二的符号，那么 jquery:'$'
    },

方式二：给每个模块都注入一个$ 只要引入模块，就可以拿到这个$,但是只是模块作用域有一个$，并不是全局
    step：  1 引入 webpack【webpack.config.js 中 require 引入】
            2 const webpackPlugin = new webpack.ProvidePlugin({$: '模块名'})

## webpack图片打包处理
    ### 图片的三种引入方式1.直接img标签，2.css的 background('url') 属性 3.js创建 new Image()
        第三种方式默认不会吧src目录下的img图片打包到我们的目标目录下，需要通过file-loader【npm install file-loader -D】 这个加载器去帮助解析打包img资源
        第一种方式，直接在html里引用img标签，也需要借助 html-withimg-loader 这个插件
        第二种方式只要 引用配置了 css-loader 就可以直接使用

## 打包文件分类  .css .js imgs html  都分别位于对应的目录下
    ### 在rule use 属性下 下的  options可选参数 中设定  outputPath：’目标文件夹下的子文件夹name‘

## 静态资源引入链接上加上 特定域名 【cdn发布】
    ### 1.在核心属性output 上加上  publicPath：’域名地址‘，这样所有的静态资源引入是都会加上这个域名地址+给定路径
        2.只向给特定静态资源加上域名，rule匹配规则 use -> options 参数中  设定 publicPath：’域名地址‘
    
