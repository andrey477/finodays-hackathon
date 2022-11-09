module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: '8.8.8.8',
        changeOrigin: true,
      },
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
      },
    },
  },
};
