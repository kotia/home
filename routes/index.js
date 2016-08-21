var express = require('express');
var router = express.Router();
var http = require('http');
var httpProxy = require('http-proxy');

router.get('/', function(req, res) {
    var env = req.param('env') || process.env.NODE_ENV;

    res.render('index', { env: env });
});

module.exports = router;
