const express = require('express');
const { loginRouter, usersRouter, categoriesRouter, postRouter } = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
