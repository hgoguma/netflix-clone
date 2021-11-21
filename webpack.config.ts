import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config:webpack.Configuration = {
    name: 'my-app',
    entry: './src/index.tsx', // 시작점
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    resolve: { 
        // 확인 가능한 확장자로 '.ts' 와 '.tsx' 를 추가
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                  'babel-loader',
                  {
                    loader: 'ts-loader',
                    options: {
                      transpileOnly: true,
                    },
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
    ]
}

export default config;