const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        },
    },
};
