const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Screens/postandget.html');
});

app.post('/login', function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'myusername' && password === 'mypassword') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password');
  }
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
