let path = require('path')
let htmlplugin = require('html-webpack-plugin')

module.exports = {
    //这里配置对入口应用
    mode:'development',
    entry:{
        home:'./src/index.js',
        //vice:'./src/viceindex.js'
    },
    //既然有两个入口，必然就有两个出口
    output:{
        // [name] 就表示home/vice 
        filename:'app/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new htmlplugin({
            template:'./src/template.html',
            filename:'html/index.html',
            chunks:['home']
        }),
        //每new 一个htmlplugin实例，就表示一个html文件
        //chunks表示引入许可，在数据里的entry就会被引入，而且可以引入多个
        //执行顺序为从右到左
        // new htmlplugin({
        //     template:'./src/template.html',
        //     filename:'html/vice.html',
        //     chunks:['vice','home']
        //     //在打包生成的vice.html中会先引入home.js,在引入vice.js
        // })
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
                // //表示该匹配规则只在include指定的文件夹下查找匹配
                // include:path.resolve(__dirname,'src'),
                // //排除哪些文件夹
                // exclude:/node_modules/
            },
        ]
    },
    devtool:'source-map',//配置 devtool 打包js时候会生成一分源码映射，因为在productionmode下所有的代码会被打包成一行，报错了很难查找错误来源，
    //devtool 有四种配置【source-map: 单独生成一个source-map文件，代码出错会显示具体行具体位置出错
    //cheap-module-source-map:不会单独生成文件，出错显示具体行和具体位置
    //eval-source-map:会产生映射map文件，但是只会提示出错行，不提示改行具体哪里出错
    //cheap-module-eval-source-map:集成在打包文件中，出错显示具体行，不报错具体位置】
    
}