var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/social-network',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
