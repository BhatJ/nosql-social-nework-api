const { connect, connection } = require('mongoose');

// Connection string to mongoDB social media database
const connectionString = 'mongodb://127.0.0.1:27017/socialmediaDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;