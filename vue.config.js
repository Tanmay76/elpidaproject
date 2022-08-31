const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css']

module.exports ={
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
    },
    configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
        // mutate config for production...
        // eslint-disable-next-line no-unused-expressions
        [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 5000,
            minRatio: 0.8
          })
        ]
      } else {
        // mutate for development...
      }
    },
    devServer: {
        proxy: {
          '/server': {
            target: 'http://localhost:8080/automation/', 
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/server/': ''
            }
          }
        }
      },
      productionSourceMap: false
}