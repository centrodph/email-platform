if (process.env.NODE_ENV == 'production') {
  module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURL: process.env.MONGO_URL,
    cookieKey: process.env.COOKIE_KEY
  };
} else {
  module.exports = require('./dev');
}
