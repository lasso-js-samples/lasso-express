require('marko/node-require').install();
require('lasso/node-require-no-op').enable();

var express = require('express');
var compression = require('compression');
var marko = require('marko');

// Configure the Lasso.js
require('lasso').configure({
    plugins: [
        'lasso-marko',
        'lasso-less'
    ]
});

var app = express();

var port = 8080;

app.use(compression()); // Enable gzip compression for all HTTP responses
app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./src/pages/index'));

app.listen(port, function() {
    console.log('Listening on port %d', port);
});
