

const express = require('express');
const app = express();
const mongoose = require('./db'); // Import the database connection

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/users', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });

  newUser.save()
    .then(() => {
      res.send('User saved successfully');
    })
    .catch(error => {
      res.send('Error saving user');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
