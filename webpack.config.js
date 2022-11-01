
const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@components':path.resolve (__dirname, 'src/componet/'),
            '@containers':path.resolve (__dirname, 'src/containers/'),
            '@styles':path.resolve (__dirname, 'src/styles/'),
            '@icons':path.resolve (__dirname, 'src/assent/icons/'),
            '@logos':path.resolve (__dirname, 'src/assent/logos/'),
            '@hooks':path.resolve (__dirname, 'src/hooks/'),
            '@context':path.resolve (__dirname, 'src/context'),
            '@pages': path.resolve (__dirname, 'src/pages')
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[
                        {
                            loader: 'html-loader'
                        }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use:[
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    
                ],
            },
            {   
                test: /\.txt$/, 
                use: [
                        {
                            loader:'raw-loader' 
                        }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

    ],
    devServer: {
        historyApiFallback: true,
    }

}