const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};
module.exports = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    mode: 'development',
    entry: {
        app: PATHS.app
    },
    module: {
        rules: [
            {
                // Test expects a RegExp! Note the slashes!
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                // Include accepts either a path or an array of paths.
                include: PATHS.app
            }]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
};