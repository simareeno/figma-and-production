const path = require('path');

module.exports = (env, argv) => ({
    mode: 'production',
    entry: './src/code.ts',
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'code.js',
        path: path.resolve(__dirname, 'dist'),
    },
});
