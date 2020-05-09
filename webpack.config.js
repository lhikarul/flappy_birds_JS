const path = require('path');

module.exports = {
    entry: './src/game.js',
    mode: "development",
    devServer: {
        contentBase: './bundle'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'bundle')
    }
}