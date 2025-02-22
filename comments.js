// Create web server
const express = require('express');
const app = express();
const comments = require('./comments');
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body; 
    comments.push(comment);
    res.status(201).json(comment);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});