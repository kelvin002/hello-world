var express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json({ type: 'application/*+json'});
var router = express.Router();

router.post('/', jsonParser, function(req, res) {
  if(!req.body || req.body.length === 0) {
    console.log('request body not found');
    return res.sendStatus(400);
  }
  var user = req.body;
  console.log('request body : ' + JSON.stringify(user));
  });
});

module.exports = router;
