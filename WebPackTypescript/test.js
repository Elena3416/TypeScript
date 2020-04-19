const path = require("path"); // ir a la direccion root para ir 
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', 
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }, //ubicacion del archivo

    resolve:{
        extentions:['.ts', '.js']
    }, //propiedad que interprete los tp y js

    module:{
        rules:[
            {
                test: /\.ts$/, //se encaga de los achivos que van a cargar
                loader: 'awesome-typescript-loader',
                exclude:  /node_modules/,        //Los archivos que no quiero que busque
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader'],
            }
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"index.html",

        }), //crea de manera dinamica mis archivos html
    ],

	devServer: {
	port: 3000,
	stats: "minimal",
},
}; 