## webpack 中的优化
    1.noParse   忽略第三包的依赖，
    3.include,exclude 包含和排除某些文件夹， rules中不去或者只去指定文件夹匹配查找
    3.时间插件  moment[npm install moment],这是比较好用的一个时间插件，里面还内置了许多语言包，但是直接使用这个插件获取时间的话，系统默认会把所有moment所支持的语言包【中文，英文，日文】等语言包都打包导致打包后的文件很大，===》 可以使用webpack内置的 IgnorePlugin 插件来配置阻止系统引入全部语言包，然后在用到moment包之前活动引入你想使用的语言包即可

## webpack 中的动态链接库 概念  
    1.安装 npm install  react react-dom 
    【
    import React from 'react'
    import { render } from 'react-dom' 

    render(<h1>react ceshi</h1>,window.root)
    //表示通过 @babel/prest-react 插件解析react语法  将 render中h1 内容 渲染到 页面 id为root的dom中去
    “上面虽然可以实现解析react语法，但是webpack 打包的时候 react react-dom”这两个第三方包也会被打包导致 打包目标结果文件很大，
    此时可以 专门为解析 react设定一个配置文件，【跟区分开发。生产环境而分别设定两个配置文件一样，专门负责干一项工作】
    】
    【webpack.config.react.js
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
                filename:'_dll_[name].js',
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
    】
    打包完后记得要去生成的打包页面文件中引入打包好的第三方js库文件，而且要在打包后的主js文件之前引入，因为 主js文件中可能有依赖于 打包后的第三方js库 


## webpack 多线程打包  
    [npm install happypack] 使用happypack 来实现
        使用happypack 进行多线程打包会跟单线程打包  rules规则 {} 的 use 属性会有区别【use:'Happypack/loader?id=js' 表示使用happypack的loader来解析js】，具体操作 需要在 happypack实例中配置
        【
            new Happypack({
            id:'js',
            use:[
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],//表示预掉插件的集合
                    }
                }
            ]
            })
        】只有打包资源较大的时候，多线程打包速度才会快，否则其实比单线程还慢【分配线程的花时间】

## webpack 自优化 模式 【生产模式下】 webpack会自动去除没用到的代码以及可以简化的代码
    【
    //import calc from './test.js'
    //test 代码【let sum = (a,b) => {
    //     return a + b + 'sum'
    // }

    // let sub = (a, b => {
    //     return a - b + 'sub'
    // })

    // export default{
    //     sum,sub
    // }】

    //console.log(calc.sum(2,6)) 输出8sum
    //【如果是 let calc = require('./test')】 console.log(calc.sum(2,6)) 直接拿sum方法会报错，因为 在es6中，require模块所返回的是一个对象，所有的方法
    //都会被挂载到default上  所以  需要 console.log(calc.default.sum(2,6)) 拿结果

    //console.log(calc.sum(2,6)) 只用到了 sum方法，而sub方法没用到，
    //webpack 自带了优化功能，如果你设置的mode为生产模式，那么webpack打包的时候会将没用到的代码剔除以减小压缩体积 ---这种工作模式 专业术语叫--tree-shaking-

    //还有一个 工作模式 --scope hosting--  同样只在生产模式下生效 
    /**
    * 假如有一段这样的代码：
    * let a=1;
    * let b=2;
    * let c=3;
    * let d = a+b+c;
    * cosole.log(d)
    * 生产模式下打包，webpack会直接将代码优化为console.log(6),而不会重复，机械的去打包这种很无意义，重复声明的的工作 
    * 这种工作模式叫 scope hosting 作用域提升
    */

    】

## webpack 抽离公共的代码 
    假如 目前代码结构是：index.js 引用a.js b.js,
                        other.js 同样也引用a,b，
    在webpack.config.js 配置：
        跟entry，devServer平级的属性 optimization 属性上配置
        optimization:{ //此处写法有变更，请查看最新api
            splitChunks:{   //分割代码块
                cacheGroups:{   //缓存组
                    common:{  //公共的模块
                        chunks:'initial',
                        minSize:0,//超过0B就抽离打包
                        minChunks:2,//公共部分引用超过两次就打包
                    },
                    vendor:{    //抽离第三方模块  如果有重复引用的话
                        priority:1,//优先级
                        test:/node_modules/,//如果重复引入的是node_modules 下的模块就打包
                        chunks:'initial',
                        minSize:0,//超过0B就抽离打包
                        minChunks:2,//公共部分引用超过两次就打包
                    }
                }  
            }
        }  

## 懒加载  热更新
    懒加载：用到的时候就去加载代码或者模块！！！【比如点击按钮时候】
    vue react都有懒加载，且原理一样
    【
        let button = document.createElement('button')
        button.innerHTML = '点我测试懒加载'
        button.addEventListener('click', ()=>{
            //https://www.cnblogs.com/Joe-and-Joan/p/10309419.html
            //import()返回一个 Promise 对象
            import('./source.js').then(data=>{ 【原理】
                //解析这个语法需要用到 npm install @babel/plugin-syntax-dynamic-import -D 这个babel库，还要配置
                console.log(data.default)
                //导出的方法或者数据会挂载到default属性上
            })
        })
        document.body.append(button)
    】
    热更新：上面的代码 如果 source中的文件中的输出内容改变了，页面想要获取到更新后的数据就会去刷新页面，要想不刷新页面就能获取到最新数据的话就需要用到所谓的热更新
    需要用到的两个插件都是webpack自带的 【配置到 plugin 中】
    const hotPlugin = new webpack.HotModuleReplacementPlugin()
    const namePlugin = new webpack.NamedModulesPlugin() //打印名字
        plugin:{
            hotPlugin,
           //最新api已经移除这个name插件了  默认开启，所以不需要配置了  namePlugin //配置了这两个nameplugin的话，在js脚本中就可以使用到 module.hot.accept('./source.js', ()=>{  这样一个方法，传入监听的源文件， 并传入一个回调用于当文件内容改变后的响应
            console.log('源文件改变了')
            }) 
        }
    【别忘了去devServer中配置开启热更新！！！这耽误不少时间
        hot:true
    】
     
