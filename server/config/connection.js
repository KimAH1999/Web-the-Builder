const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://username:passwordhere@webthebuilder.oihmy.mongodb.net/profilesdb', { //replace uri with same uri from .env folder for proper connection
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
