const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();
app.use((req, res, next) => {
  req.user = {
    _id: '63d7a546743642e1000a0b6b',
  };

  next();
});

app.use(bodyParser.json());
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

mongoose.connect('mongodb://localhost:27017/mestodb ');
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
