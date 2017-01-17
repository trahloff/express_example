const express = require('express'),
    app = express(),
    http = require('http');

app.get('/hello', (request, response) => {
    response.send('Hello!')
});



const server = http.createServer(app).listen(80);
console.log("Server listening on localhost:80");











// app.use('/helloWorld', require('./components/routes/helloWorld.js'));
