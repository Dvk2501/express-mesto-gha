const express = require('express');
const mongoose = require('mongoose');
const { NOT_FOUND } = require('./constats');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.post('/signin', login);
app.post('/signup', createUser);
app.use(auth);

app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('/*', (req, res) => {
  res.status(NOT_FOUND).send({ message: 'Страница не найдена' });
});

mongoose.connect('mongodb://localhost:27017/mestodb ');
app.listen(PORT);
