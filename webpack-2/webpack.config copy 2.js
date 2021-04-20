let path = require('path')
let htmlplugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let copyplugin = require('copy-webpack-plugin')
let webpack = require('webpack')
module.exports = {
    mode:'development',
    entry:{
        home:'./src/index.js',
    },
    output:{
        // [name] 就表示home/vice 
        filename:'app/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{  //服务器配置
        // proxy:{
        //     // '/api':'http://localhost:4000' //表示请求 /api 开头的 url地址，就转到4000端口
        //     '/api':{
        //        target:'http://localhost:4000' ,
        //        pathRewrite:{'/api':''}//将/api重写为''
        //     }
        // }
        
        //不通过代理 直接访问内置的express

        before(app) {
            app.get('/test', function(req, res){
                res.json({test:'webpack内置express测试,chongxie  neizhi express'})
            })
        }
    },
    resolve:{   
        //这个属性专门用于设置解析第三方包/插件
        
        modules:[path.resolve('node_modules')], //解析方式，nodejs默认加载包的时候先去当前目录下的node_modules找，找不到再去上一级找，直至磁盘根目录，添加 modules属性，可以规定
        //具体到哪些个文件夹去找


    },
    plugins:[
        new htmlplugin({
            template:'./src/template.html',
            filename:'html/index.html',
            chunks:['home']
        }),
        //new CleanWebpackPlugin(),
        // new copyplugin({
        //     patterns:[
        //         {from:'./doc', to:'./'}
        //     ]
        // }),
        new webpack.BannerPlugin('test chajian'),
        new webpack.DefinePlugin({
            
            test2:JSON.stringify("test2")
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],//表示预掉插件的集合
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