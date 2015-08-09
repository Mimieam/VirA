var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile(__dirname + '/../app/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});
router.get('/lob', function(req, res, next) {
    fs.readFile(__dirname + '/../app/index.html', 'utf8', function(err, text){
        res.send("test");
    });
});
module.exports = router;
