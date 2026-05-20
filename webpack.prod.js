const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxPlugin = require('workbox-webpack-plugin'); // ✅ Import Workbox

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: 'service-worker.js',
      include: [/\.(js|css|html)$/],
      exclude: [/\.map$/, /_redirects/],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
    }),
  ],
});
