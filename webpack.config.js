const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.marko$/,
                loader: "@marko/webpack/loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    mode: "development",
    plugins: [new BundleAnalyzerPlugin()],
    resolve: {
        extensions: [".ts", ".js", ".marko", ".css"],
    },
};
