const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/web-graphshowwithSigma'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/dist/web-graphshowwithSigma/index.html'));
});
app.listen(process.env.PORT || 8080);
console.log('Tombala herokuda basladi');

// default Heroku PORT
