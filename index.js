var PORT = 33333;
var HOST = '0.0.0.0';


var fs = require('fs')
var dgram = require('dgram')
var server = dgram.createSocket('udp4')

var structure = require('./helper/structure.js')

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});


// floats = 4 bytes

server.on('message', function (message, remote) {

    console.log(structure.fromPacket(message))




    //console.log(message.readFloatLE(0) + ' ' + message.readFloatLE(4) + ' ' + message.readFloatLE(8) + ' ' + message.readFloatLE(12))
    //fs.appendFileSync('./f1output.txt', message + '\n')
});

server.bind(PORT, HOST);