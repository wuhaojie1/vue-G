/*
*Vue-CLI项目的核心配置文件
*/
const webpack = require("webpack");

module.exports = {

    //Jquery
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000', //API服务器的地址
                // ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                // pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                //     '^/api': ''
                // }
            }
        },
        disableHostCheck: true,//Invalid Host header的解决方案
    }

};
