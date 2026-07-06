require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const contactsRoutes = require('./routes/contacts');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/contacts', contactsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});