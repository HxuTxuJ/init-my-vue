const path = require('path')

//导入在内存中生成 HTML 页面的插件
//只要是插件就放到 plugins 中去
//这个插件的两个作用： 
// 1. 自动在内存中根据指定页面生成一个内存的页面
// 2. 自动，把打包好的 main.js 缀加到页面中去
const HtmlWebpackPlugin=require('html-webpack-plugin') 
const webpack = require('webpack')  //启用热更新的第二步
const VueLoaderPlugin = require('vue-loader/lib/plugin')  //使用 vue-loader 需引用此文件

//这个配置文件，起始就是一个 JS 文件，通过 node 中的模块操作，向外暴露了一个配置对象
module.exports = {
	//在配置文件中，需要手动指定 入口 和 出口
	entry: path.join(__dirname, './src/index.js'),  //入口，表示要使用 webpack 打包哪个文件
	output: {   //输出 文件相关的配置
		path: path.join(__dirname, './dist'),   //指定打包好的文件，输出到哪个目录中去    path:路径
		filename: 'main.js'   //这是指定 输出的文件的名称    filename:文件
	},
	plugins:[
        new HtmlWebpackPlugin({  //创建一个 在内存中生成 HTML 页面的插件
            template: path.join(__dirname, './src/index.html'),  //指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html'   //指定生成的内存页面的名称
        }),
        new webpack.HotModuleReplacementPlugin() , // new 一个热更新的模块对象，这是启用热更新的第三步
        new VueLoaderPlugin()     // new 一个新的文件
    ],
    devServer:{
        host:'localhost',   //服务器的ip地址
        port:3000,  //端口
        open:true,  //自动打开页面
        //contentBase: 'src',  //指定托管的根目录
        hot: true  //启用热更新  第一步
    },
    module: {  //这个节点，用于配置所有的第三方模块加载器
    	rules: [  //所有第三方模块的匹配规则
    		{ test: /\.css$/, use: ['style-loader', 'css-loader'] },  //配置处理 .css 文件的第三方loader 规则
    		{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  //配置处理 .less文件的 第三方 loader 规则
    		{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },  //配置处理 .scss文件的 第三方 loader 规则
    		{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },  //处理图片路径的 loader
    		// limit 给定的值，是图片的大小，单位是 byte, 如果我们引用的图片，大于或等于给定的 limit值，则不会被转为 base64 格式的字符串，如果图片小于给定的 limit 值，则会被转为 base64 的字符串
    		{ test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },  //处理字体文件的 loader
    		{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },  //配置 Babel 来转换高级的 ES 语法
            { test: /\.vue$/, use: 'vue-loader' }  //处理 .vue 文件的 loader
    	]
    },
    resolve: {  //第二种方式配置 vue 路径
        alias: {  //设置 vue 被导入时候的包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}




//当我们在控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步：
// 1. 首先， webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2. webpack 就会去 项目的根目录汇总，查找一个叫做 'webpack.config.js' 的配置文件
// 3. 当找到配置文件后， webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中，导出的配置对象
// 4. 当 webpack 拿到配置对象后，就拿到了配置对象中，指定的入口 和 出口，然后进行打包构建