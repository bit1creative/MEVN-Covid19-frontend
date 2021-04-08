const path = require('path');

module.exports = {
    productionSourceMap: false,
    publicPath:
        process.env.NODE_ENV === 'production' ? '../server/public' : '/',
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        },
    },
};
