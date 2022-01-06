const express = require("express");

const server = express();

server.listen(8080);

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
})

server.get('/inst_vue.js', (req, res) => {
    res.sendFile(__dirname + "/src/inst_vue.js");
})
