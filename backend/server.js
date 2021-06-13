// server.js
const express = require('express');
const path = require('path');
var appRoot = require('app-root-path');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const port = 8000;


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

require('./app/routes')(app);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
