let path = require('path')
let htmlplugin = require('html-webpack-plugin')
//const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//let copyplugin = require('copy-webpack-plugin')
let webpack = require('webpack')
// let Happypack = require('happypack')
const hotPlugin = new webpack.HotModuleReplacementPlugin()
//const namePlugin = new webpack.NamedModulesPlugin() //打印名字
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
        //other:'./src/other.js'
    },
    output:{
        // [name] 就表示home/vice 
        filename:'app/[name].js',
        path:path.resolve(__dirname,'dist2')
    },
    devServer:{  //服务器配置
       port:3000,
       open:true, //自动打开浏览器
       contentBase:'./dist2',
       hot:true,//开启热更新
    },
    resolve:{   
        //这个属性专门用于设置解析第三方包/插件
    },
    plugins:[ //插件
       new htmlplugin({
           template:'./public/index.html'
       }),
       hotPlugin,//热更新插件
    //    namePlugin,//监听文件内容改变 挂载一个 accept方法
        // new webpack.IgnorePlugin(/\.\/locale/,/moment/),//忽略从moment插件下的 locale文件夹下引入的语言包
        //    new webpack.DllReferencePlugin({ //webpack自带插件，每次打包之前都回去这个指定path下查询是否已经打包了指定的包，然后直接引用就可了
        //     manifest:path.resolve(__dirname,'testreact','manifest.json') 
        //     }),
        // new Happypack({
        //     id:'js',
        //     use:[
        //         {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['@babel/preset-env', '@babel/preset-react'],//表示预掉插件的集合
        //             }
        //         }
        //     ]
        // })
    ],
    // optimization: {  此处有写法有变更，用到去api文档查看最新用法
    //     splitChunks:{  //分割代码块
    //       cacheGrops:{  //缓存组
    //         common:{    //公共模块 
    //           chunks: 'initial',  //入口从哪找
    //           minSize: 0 , //大于0个字节
    //           minChunks: 0 //引用0次
    //         }
    //       }
    //     },
    //     vendor: {  //抽离第三方模块 比如jquery
    //         priority: 1, //先抽离第三方模块
    //         test: /node_modules/, //引入
    //         chunks: 'initial',  //
    //         minSize: 0 , //
    //         minChunks: 0 //
    //       }
    //    },
    module:{
        noParse:/jquery/,//不解析jquery的依赖库
        rules:[
            {
                test: /\.js$/,
                //use:'Happypack/loader?id=js'
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],//表示预掉插件的集合
                        plugins:['@babel/plugin-syntax-dynamic-import']
                    }
                },
               
            },
        ]
    },
    devtool:'source-map',//配置 devtool 打包js时候会生成一分源码映射，因为在productionmode下所有的代码会被打包成一行，报错了很难查找错误来源，
    watch:true,//实时监听打包，就不用代码每次修改都要去执行打包命令
    watchOptions:{
        poll:1000,//没秒询问1000是否打包
        aggregateTimeout:500,//输入完毕后再过0.5s后再打包
        ignored:/node_modules/,//忽略打包
    }
}