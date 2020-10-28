require('./config/connection');
const express = require('express')
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();

const port = process.env.PORT || "3000";
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded' }));

app.use(cors());

app.use((req, res, next) => {
  console.log('The request from the user is ', req.body);
  next();
});


app.listen(port, () => {
  console.log('The application run on the port ', port);
});

//app.use(require('./config/connection'));
app.use(require('./router/route'));