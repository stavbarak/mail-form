var express = require('express')
var cors = require('cors')
var app = express()
var sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post('/', cors(), function (req, res) {
  sgMail.send(req.body)
  .then(() => res.end())
  .catch( error => {
  	console.log("error",error);
  	res.status(500).json(error);
  })
})
 
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})