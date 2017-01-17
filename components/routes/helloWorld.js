const express = require('express');

module.exports = (function() {
    let api = express.Router();
    api.get('/', (request, response) => {
        response.send('Hello World!');
    })
    return api;
})();
