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

};
