const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, '/src/main.ts')
    },
    output: {
        filename: '[name].min.js',
        path:path.join(__dirname, '/dist'),
        library: '[name]',
        libraryTarget: 'umd',
    },
    devtool: "source-map",
    optimization:{
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: {
        "phaser": "Phaser"
    }
};