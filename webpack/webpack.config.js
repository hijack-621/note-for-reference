
 let path = require('path')
 let htmlplugin = require('html-webpack-plugin')
 let minicssplugin = require('mini-css-extract-plugin')
 module.exports = {
     mode:'development', //模式 production/development
     entry:'./src/index.js',//入口文件
     output:{
        filename:'main.[hash:6].js',//打包后的文件名 .[hash] 表示让每次打包的文件名都不重复，也就是带上六位的hash码 
        path:path.resolve(__dirname,'main'),
       
    },
    devServer:{//服务器的配置
        port:3000,//端口，进度条，服务器指向的目录
        progress:true,
        contentBase:'./dist'
       
    },
    plugins:[ //数组  存放所有的webpack插件
        new htmlplugin({
            template:'./src/index.html',
            filename:'index.html',//要打包文件名和路径
            
        }),
        new minicssplugin({
            filename:'extcss.css' //抽离出来的css样式名称
        })

    ],
    module:{ 
        rules: [

            {   //图片打包处理
                test:/\.(jpg|png|gif)/,
                use:{
                    loader:'file-loader',
                //这里还可以做一个限制[使用options 参数],来规定如果图片的大小，超过limit就生成真实的图片，否则使用base64方式处理图片
                    options:{
                        limit:60*2014,
                    //表示小于60k就使用base64编码方式处理图片
                        outputPath:'images'
                    }

                }
            },

            //{test:/\.css$/,use:['style-loader','css-loader']},//方式1
            // {
            //     test: /\.css$/, use: [{ //这是处理css文件
            //         loader: 'style-loader',//加载器用法单一，跟nodejs模块一样，loader顺序默认是从右向左，从下到上直行
            //         options: {
            //             //可选参数 https://webpack.docschina.org/loaders/css-loader/
            //         }
            //     }, 'css-loader']
            // },//方式2,可以传入一个对象，可以传第二个参数

                //将jquery 暴露给全局
            // {
            //     test: require.resolve('jquery'),//如果引入jquery
            //     use: 'expose-loader?$',
            // },

            {
                test: /\.css$/, use: [minicssplugin.loader, 'css-loader', 'postcss-loader']
            },//方式3  把css样式抽离到link中去,而且会自动引入 minicssplugin为插件实例,  
            // 'postcss-loader' 表示在解析css之前去判断哪些样式需要加浏览器前缀，并且通过配置文件【postcss-config.js】去调用autoprefixer这个插件完成前缀自动补齐


            {   //这两种方式的最终结果是，会生成script样式标签插入到<head>上面
                test: /\.less$/, use: [minicssplugin.loader, 'css-loader', 'postcss-loader', 'less-loader'] //less-loader 吧less->css
            },

            //校验js语法是否符合规范  这个一般项目最后在打开，解决语法问题
            // {
            //     test: '/\.js$/',
            //     use: {
            //         loader: 'eslint-loader',
            //         options: {
            //             enforce: 'pre',//表示强制让这个规则先匹配执行 ‘post’表示后执行
            //         }
            //     }
            // },


                    //配置babel 来解析es6，es7 并转成es5语法
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],//表示预掉插件的集合
                        plugins: [//下面的插件依赖上面的预调插件
                            // '@babel/plugin-proposal-class-properties',//解析es7 一些高级语法【例如 class,】
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],//解析 @装饰器等高级语法
                            ['@babel/plugin-proposal-class-properties', { "loose": true }],////解析 @装饰器等高级语法 需要一起引入，并且引入有先后顺序
                            '@babel/plugin-transform-runtime' //帮助解析高级js语法
                        ]
                    }
                },
                //表示该匹配规则只在include指定的文件夹下查找匹配
                include:path.resolve(__dirname,'src'),
                //排除哪些文件夹
                exclude:/node_modules/
            },

           


            ]   
        },//可以把样式抽离到【插件配置 【mini-css-extract-plugin -D】】link标签中去
 }