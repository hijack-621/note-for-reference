//单独打包react react-dom 所用配置文件

const path = require('path') 
const webpack = require('webpack')


module.exports = {
    mode:'development',
    entry:{
        //test:'./src/testreact.js'
        react:['react','react-dom']//打包模块
    },
    output:{
        filename:'_dll_[name].js',//webpack.config.js 主配置文件中要参考这个js new webpack.DllReferencePlugin({ manifest:path.resolve(__dirname,'testreact','manifest.json') })
        path:path.resolve(__dirname,'testreact'),
        library:'dll_react',//将打包的js文件中的返回值【export导出的结果】赋值给res这个变量
        //libraryTarget:'var' //默认 var https://blog.csdn.net/frank_yll/article/details/78992778
    },
    plugins:[
        // new webpack.DllReferencePlugin({ //webpack自带插件，每次打包之前都回去这个指定path下查询是否已经打包了指定的包，然后直接引用就可了
        //     manifest:path.resolve(__dirname,'testreact','manifest.json')
        // }),
        new webpack.DllPlugin({
           name:'dll_react', //name === library[library:'dll_react']
           path:path.resolve(__dirname,'testreact','manifest.json')//表示最终在指定文件下生成一个json【任务清单】文件 里面有个name属性，每个任务都会在打包出来的文件中找跟name同名的变量然后执行任务
       })
    ]
}