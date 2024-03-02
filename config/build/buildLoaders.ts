import * as webpack from "webpack";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildOptions} from "./types/buildOptions";
export function buildLoaders(options:buildOptions):webpack.RuleSetRule[] {
    const typescriptLoader =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
    }
    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev? 'style-loader': MiniCssExtractPlugin.loader,
            {
                loader:"css-loader",
                options: {
                    modules: {
                        auto: /[A-Za-z]+\.module\.(sass|scss|css)+/i,
                        localIdentName:options.isDev
                            ?"[path][name]__[local]--[hash:base64:5]":
                            "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ]
    }
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff|woff2)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
    }
    const babelLoader =  {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    return [typescriptLoader,sassLoader,svgLoader,fileLoader,babelLoader]
}