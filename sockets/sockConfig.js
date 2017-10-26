var express = require('express');
var router = express.Router();

module.exports = {
    start: function(io) {
        io.on('connection', function(socket) {
            socket.on('message', function(message) {
                console.log('from console  :',message.message);
                io.emit('message',{
                    name : message.name,
                    message : message.message
                });
            });
        });
    }
}