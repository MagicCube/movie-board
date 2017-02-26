const express = require('express');
const proxy = require('http-proxy-middleware');

const config = require('./webpack.config');

const app = express();
app.use(express.static('public'));
app.use('/api', proxy(config.devServer.proxy['/api']));
app.listen(8080, () => {
  console.log('movie-board is now listening at 8080...');
});
