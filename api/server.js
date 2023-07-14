const express = require('express');
const authRoute = require('./routers/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
