//webpack 配置文件  webpack是基于nodejs的 语法 要用ndoejs的语法
/**
 * 用于配置，入口文件，打包输出的文件位置，文件名，打包模式等配置文件
 *webpack 默认的配置文件就叫webpack.config.js,如果想改的话，可以在项目根目录下的package.json中  配置 script:{}参数，里面写 对应的key:val 键值对语法，
 * 执行的话  就 npm run key 就可以执行到val里写的脚本了
 */

 let path = require('path')
 let htmlplugin = require('html-webpack-plugin')
 let minicssplugin = require('mini-css-extract-plugin')
 module.exports = {
     mode:'development', //模式 production/development
     entry:'./src/index.js',//入口文件
     output:{
        filename:'main.[hash:6].js',//打包后的文件名 .[hash] 表示让每次打包的文件名都不重复，也就是带上六位的hash码 
        path:path.resolve(__dirname,'main'),
        //打包后的生成文件夹名字
        //路径必须是一个绝对路径，这里使用path模块的resolve方法，吧相对路径转化为绝对路径
    },
    devServer:{//服务器的配置
        port:3000,//端口，进度条，服务器指向的目录
        progress:true,
        contentBase:'./dist'
        //当指定的输出文件夹和文件名不存在时，又想让脚本执行ok
        //可以使用webpack插件 html-webpack-plugin 这个插件【npm 安装】 
    },
    plugins:[ //数组  存放所有的webpack插件
        new htmlplugin({
            template:'./src/index.html',
            filename:'index.html',//要打包文件名和路径
            // minify:{    //打包压缩html
            //     // removeAttributeQuotes:true,//移除双引号
            //     // collapseWhitespace:true,//一行显示html字符串
            // }
        }),
        new minicssplugin({
            filename:'extcss.css' //抽离出来的css样式名称
            //但是有时候css样式需要带上浏览器前缀，想自动带上的话可以使用【postcss-loader autoprefixer 这两个插件解决】
            //如果有需要压缩 css，可以使用 optimize-css-assets-webpack-plugin【npm 安装 和require引入得到对象，在new得到对象实例】
            

        })

    ],
    module:{ 
        rules: [
            //{test:/\.css$/,use:['style-loader','css-loader']},//方式1
           
            // {
            //     test: /\.css$/, use: [{ //这是处理css文件
            //         loader: 'style-loader',//加载器用法单一，跟nodejs模块一样，loader顺序默认是从右向左，从下到上直行
            //         options: {
            //             //可选参数 https://webpack.docschina.org/loaders/css-loader/
            //         }
            //     }, 'css-loader']
            // },//方式2,可以传入一个对象，可以传第二个参数

            //

            {
                test: /\.css$/, use: [minicssplugin.loader, 'css-loader', 'postcss-loader']
            },//方式3  把css样式抽离到link中去,而且会自动引入 minicssplugin为插件实例,  
            // 'postcss-loader' 表示在解析css之前去判断哪些样式需要加浏览器前缀，并且通过配置文件【postcss-config.js】去调用autoprefixer这个插件完成前缀自动补齐


            {   //这两种方式的最终结果是，会生成script样式标签插入到<head>上面
                test:/\.less$/, use:[minicssplugin.loader, 'css-loader', 'postcss-loader' ,'less-loader'] //less-loader 吧less->css
                }, 
            ]   
        },//可以把样式抽离到【插件配置 【mini-css-extract-plugin -D】】link标签中去
 }