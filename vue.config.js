module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://spigin.ru:5000',
        changeOrigin: true,
      },
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
      },
    },
  },
};
