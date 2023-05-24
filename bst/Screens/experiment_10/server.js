// server.js

const express = require('express');
const app = express();
const mongoose = require('./db'); // Import the database connection

const User = require('./user'); // Import the User model

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Save user data to the database
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

// Update user data in the database
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findByIdAndUpdate(userId, req.body)
    .then(() => {
      res.send('User updated successfully');
    })
    .catch(error => {
      res.send('Error updating user');
    });
});

// Delete user from the database
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then(() => {
      res.send('User deleted successfully');
    })
    .catch(error => {
      res.send('Error deleting user');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
