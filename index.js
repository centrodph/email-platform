const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

var bodyParser = require('body-parser');


//config
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURL);

const routes = require('./routes');
const app = new express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
routes(app);
//createServer
const port = process.env.PORT || 3090;
http.createServer(app).listen(port);
console.log('Listen ' + port);
