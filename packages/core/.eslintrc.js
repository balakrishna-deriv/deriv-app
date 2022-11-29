const webpackConfig = require('./build/webpack.config-test');

module.exports = {
    extends: '../../.eslintrc.js',
    settings: {
        'import/resolver': {
            webpack: { config: webpackConfig({}) },
        },
    },
    globals: {
        VERCEL_ANALYTICS_ID: true,
    },
};
