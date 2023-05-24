

const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoDBUrl = 'mongodb://localhost:27017/?directConnection=true';

// Connect to MongoDB
mongoose.connect(mongoDBUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
