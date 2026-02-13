const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: '*.html', to: '[name][ext]' },
        { from: 'blog', to: 'blog' },
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: '.well-known', to: '.well-known' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: 'browserconfig.xml', to: 'browserconfig.xml' },
        { from: 'sitemap.xml', to: 'sitemap.xml' },
        { from: 'image-sitemap.xml', to: 'image-sitemap.xml' },
        { from: 'CNAME', to: 'CNAME' },
        { from: '.htaccess', to: '.htaccess' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
