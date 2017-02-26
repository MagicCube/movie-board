const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(express.static('public'));
app.use('/api', proxy({
  target: 'http://api.douban.com/v2',
  pathRewrite: { '^/api': '' },
  changeOrigin: true,
}));
app.listen(8080, () => {
  console.log('movie-board is now listening at 8080...');
});
