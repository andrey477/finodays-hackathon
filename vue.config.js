module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: true,
    proxy: {
      // '/api': {
      //   target: 'http://45.153.231.237:5000/',
      //   changeOrigin: true,
      // },
      '/api': {
        target: 'http://spigin.ru:5000',
        changeOrigin: true,
      },
    },
  },
};
