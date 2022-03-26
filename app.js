const express = require('express');

const usersRouter = require('./routes/users');

const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);

app.use('/cards', cardsRouter);

app.get('*', (req, res) => {
  res.send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
