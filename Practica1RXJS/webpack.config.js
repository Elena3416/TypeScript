const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
    devtool:"inline-source-map",
    entry:"./SRC/Index.ts",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"bundle.js"
    },

    module:{
        rules:[
            {
                test:/\.ts$/, //obtener todos los archivos ts 
                loader:"awesome-typescript-loader", //cargar los archivos 
                exclude: /node_modules/, //no cargar estos archivos
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },

    plugins:[
        new HtmlWebPackPlugin({
            template: "./index.html",
        }),
    ],

    devServer:{
        port:3000,
        stats:"minimal"
    },
};

