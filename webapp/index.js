var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();
var config = require('./webpack.config.babel.js');
var history = require('connect-history-api-fallback');
var compiler = webpack(config);
var PORT = 3000;

app.use(history())
app.use(webpackDevMiddleware(compiler))

app.get('stuff', (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(
    webpackDevMiddleware(compiler).fileSystem.readFileSync(config.output.path + '/index.html')
  )
})

app.listen(PORT, error => {
  if (error) {
    throw error
  }
  console.log(`Currently listening on http://localhost:${PORT}/`)
})
