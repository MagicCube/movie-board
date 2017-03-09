const compression = require('compression');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(compression());
app.use(express.static('public', {
  maxAge: '2h'
}));
app.use('/api', proxy({
  target: 'http://api.douban.com/v2',
  pathRewrite: { '^/api': '' },
  changeOrigin: true,
}));

console.log('\n[WARNING] movie-board is now running in PRODUCTION mode.');
console.log('[WARNING] If you want to run it in DEVELOPMENT mode, please try "npm run dev" instead.\n');
app.listen(8080, () => {
  console.log('[INFO] movie-board is now listening at 8080...');
});
