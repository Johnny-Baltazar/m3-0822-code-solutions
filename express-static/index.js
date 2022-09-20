const express = require('express');
const path = require('path');
const app = express();

const joinedDir = path.join(__dirname, 'public');

const publicDir = express.static(joinedDir);

app.use(publicDir);

app.listen(3000, () => {
  console.log('The Server is Listening.');
});
