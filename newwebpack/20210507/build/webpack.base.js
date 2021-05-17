const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
    //官网除了表示配置打包规则rules，还要实例化一个vueloader插件

const htmlwebpackplugin = require('html-webpack-plugin')
    //引入 html-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    //最新的webpack导出的不只一个构造函数，这里使用结构语法只取需要用到的

module.exports = { //导出一个对象
    entry: './src/main.js', //打包入口
    /*打包出口,一个对象，指定
    filename：打包后的js名
    path，打包后的路径
    */
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
            /*由于这里需要绝对路径，需要用到nodejs种的path模块
            __dirname 表示当前文件夹的绝对路径，
            这里表示在项目跟目录下新建dist文件作为打包后存放路径
            */
    }, //到这里就是webpack最基本的配置，没有用到各种处理器处理js，css，img等资源
    module: {
        rules: [

            {
                test: /\.m?js$/,
                exclude: /node_modules/, //表示忽略node_modules 这个文件夹
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/, // 正则表示匹配.vue结尾的文件
                loader: 'vue-loader',
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                // loader: 'file-loader',
                loader: 'url-loader',
                options: {
                    limit: 2048, //表示小鱼2048bytes的文件使用base64直接打包到js中
                    name: '[name].[ext]' //这里可以查阅webpackjs.com 查看file-loader的配置选项
                        //这里表示使用原文件名加原扩展进行打包生产文件到指定目录下！！！
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //使用多个loader语法，use+数组，数组里面传入多个loader 的name，并且webpack使用数组里的loader，顺序是从右往左，从下往上去依次加载并使用这些loader
            },
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlwebpackplugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: { //表示一些解决方案
        alias: { //别名
            'vue': 'vue/dist/vue.js', //这里表示导入vue时，导入此处指定路径下的文件
            '@': path.resolve(__dirname, '../src'), //配置@符号指向为根目录下的src
            'css': path.resolve(__dirname, '../src/static/css'), //配置style别名指向css样式目录
            'images': path.resolve(__dirname, '../src/static/images'),
        }
    }
}