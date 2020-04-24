const socketio = require( "socket.io");
const toParse = require('./controllers/utils/parseStringAsArray')
const calculateDistance = require('./controllers/utils/calculateDistance')
const conections = []
let io;

exports.setupWebsocket = (server) =>{
    io = socketio(server)

    io.on('connection', socket =>{
        console.log(socket.id)
        console.log(socket.handshake.query)
        
        conections.push({
            id: socket.id,
            coordinates:{
                latitude: Number(latitude),
                longitude: Number(latitude)
            },
            techs: toParse(techs)
        })

    })
}

exports.findConnections = (coordinates, techs) =>{
    return this.Connections.filter(connection =>{
        return calculateDistance(coordinates, connections.coordinates) <100&&
            connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) =>{
    to.forEach(element => {
        io.to(connection.id).emit(message, data)
    });
}
