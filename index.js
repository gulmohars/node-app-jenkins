const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen('3930', () => {
  console.log('app Listening on port 3930');
});

module.exports = app;
