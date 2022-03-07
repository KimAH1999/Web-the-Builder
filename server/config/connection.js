const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/profilesdb'
  // 'mongodb+srv://kim:HVyLjD9d9272eyWCyB8uZat@webthebuilder.oihmy.mongodb.net/profilesdb',
  { //replace uri with same uri from .env folder for proper connection
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
