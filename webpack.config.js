const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 4200,
    },
    plugins: [
        
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: './index.html',
            chunks: ['main']
        }),
        new CleanWebpackPlugin()

            
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [ 
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images', 
                        },
                    } 
                ]
            },
            {
                test: /\.(?:|woff2|woff)$/i,
                type: 'asset/resource',
                generator: {
                    filename: () => {
                        return isDev ? 'fonts/[name][ext]' : 'fonts/[name].[contenthash][ext]';
                    },
                },
            }
        ]
    }
}