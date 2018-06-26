var express = require('express');
var app = express();
// install body-parser
// define body-parser (require)
 
app.get('/puppies', function (req, res) {
  res.send('Hello World')
})

app.post('/puppy', function (req, res) {
    console.log(req.body)
    res.send('Lab')
  })
 
app.listen(3000)