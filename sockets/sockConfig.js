var express = require('express');
var router = express.Router();

module.exports = {
    start: function(io) {
        io.on('connection', function(socket) {
            socket.on('message', function(message) {
                console.log('from console  :',message);
                io.emit('message',{
                    message : message
                });
            });
        });
    }
}