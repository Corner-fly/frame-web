const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const fs = require('fs');
let domainName, ssoDataName;
if (process.env.NODE_ENV == "development") {
    domainName = `resource/domain.json`;
    ssoDataName = `resource/ssoData.json`;
} else {
    domainName = `resource/domain-${process.env.VUE_APP_ENV}.json`;
    ssoDataName = `resource/ssoData-${process.env.VUE_APP_ENV}.json`;
}
// 替换domain.json
fs.exists(domainName, function (exist) {
    exist && fs.readFile(domainName, function (err, data) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(`public/domain.json`, data.toString(), function (err) {
            if (err) {
                return console.error(err);
            }
        })
    });
})
// 替换ssoData.json
fs.exists(ssoDataName, function (exist) {
    exist && fs.readFile(ssoDataName, function (err, data) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(`public/ssoData.json`, data.toString(), function (err) {
            if (err) {
                return console.error(err);
            }
        })
    });
})

module.exports = {
    lintOnSave: false,
    baseUrl: "./",
    outputDir: 'dist/product',
    devServer: {},

    configureWebpack: {
        plugins: [
            new webpack.DllReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/vendor/vendor-manifest.json')
            }),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                // dll文件位置
                filepath: path.resolve(__dirname, './public/vendor/*.js'),
                // dll 引用路径
                publicPath: './vendor',
                // dll最终输出的目录
                outputPath: './vendor'
            })
        ]
    },
    pages: {
        product: {
            entry: "src/product/product/product.js",
            template: "src/product/product/product.html",
            filename: "product.html",
            title: "product Page",
            chunks: ["chunk-vendors", "chunk-common", "product"]
        },
        productManagement: {
            entry: "src/product/productManagement/productManagement.js",
            template: "src/product/productManagement/productManagement.html",
            filename: "productManagement.html",
            title: "productManagement Page",
            chunks: ["chunk-vendors", "chunk-common", "productManagement"]
        },
    },
};
