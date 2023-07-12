const express = require('express');
const app = express();
require('dotenv').config();
const authRoute = require('./routers/auth');

const PORT = 5000;

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
