const webpack = require("webpack");
const path = require("path");

const config = {
    mode: "development",
    entry: {
        main: "./src/App.tsx"
    },
    optimization: {
        minimize: false
    },
    // Render source-map file for final build
    devtool: "source-map",
    // output config
    output: {
        path: path.resolve(__dirname, "dist"), // Path of output file
        filename: "App.min.js" // Name of output file
    },
    plugins: [
        // Define production build to allow React to strip out unnecessary checks
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ["awesome-typescript-loader"]
            },
            {
              enforce: 'pre',
              test: /\.js(x?)$/,
              loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    }
};

module.exports = config;
