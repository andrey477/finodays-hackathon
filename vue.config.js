module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://45.153.231.237:5000',
        changeOrigin: true,
      },
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
      },
    },
  },
};
