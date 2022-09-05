module.exports ={
    
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