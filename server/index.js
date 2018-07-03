require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(express.static('dist'));

function twitAuthentication(hashtags, num) {
  var Twit = require('twit')
 
  var T = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  return new Promise(function(resolve, reject) {
    T.get('search/tweets', { q: hashtags, count: num }, function(err, data, response) {
      if (!err) {
        resolve(data)
      } else {
        console.log(err)
      }
    })
  })
}

app.get('/', (req, res) => {
  res.send(path.resolve(__dirname, '/dist/index.html'))
});

app.get('/hashtags', (req, res) => {
  twitAuthentication(req.query.hashtags, req.query.count).then(data => res.json(data))
})

app.listen(port);
console.log('Server Started');
