const express = require('express');
const path = require('path');

const logger = require ('./middleware/logger.js');

const app = express();

// To initilize middleware
// app.use(logger);

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Route
app.use('/api/members', require('./routes/api/membersApi.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));