const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://vocall-server.herokuapp.com',
      changeOrigin: true,
    })
  );
};