

const asyncLocalStorage = require('./als.service');
const logger = require('./logger.service');

var gIo = null
var gSocketBySessionIdMap = {}

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }
    });

    const sharedSession = require('express-socket.io-session');

    gIo.use(sharedSession(session, {
        autoSave: true
    }));
    gIo.on('connection', socket => {
        console.log('New socket - socket.handshake.sessionID', socket.handshake.sessionID)
        gSocketBySessionIdMap[socket.handshake.sessionID] = socket
        // if (socket.handshake?.session?.user) socket.join(socket.handshake.session.user._id)
        socket.on('disconnect', socket => {
            console.log('Someone disconnected')
            if (socket.handshake) {
                gSocketBySessionIdMap[socket.handshake.sessionID] = null
            }
        })
        socket.on('add member', boardId => {

            if (socket.boardId === boardId) return;
            if (socket.boardId) {
                socket.leave(socket.boardId)
            }
            console.log('member joined,', boardId)
            socket.join(boardId)
            // logger.debug('Session ID is', socket.handshake.sessionID)
            socket.boardId = boardId
            // console.log(gSocketMap);
            console.log(socket.boardId);
        })
        socket.on('update board', (board) => {         
            // gIo.sockets.in(socket.boardId).emit('updated board', board)
            // gIo.emit('updated board', board)
            console.log('here emit ',socket.boardId);
            // socket.to(socket.boardId).emit('updated board', board)
            socket.broadcast.emit('updated board', board)
        })
        socket.on('update newMsg', msg => {
            console.log('Msg', msg);
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            socket.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('user-watch', userId => {
            socket.join(userId)
        })

    })
}

function emitToAll({ type, data, room = null }) {
    if (room) gIo.to(room).emit(type, data)
    else gIo.emit(type, data)
}

// TODO: Need to test emitToUser feature
function emitToUser({ type, data, userId }) {
    gIo.to(userId).emit(type, data)
}


// Send to all sockets BUT not the current socket 
function broadcast({ type, data, room = null }) {
    const store = asyncLocalStorage.getStore()
    const { sessionId } = store
    if (!sessionId) return logger.debug('Shoudnt happen, no sessionId in asyncLocalStorage store')
    const excludedSocket = gSocketBySessionIdMap[sessionId]
    if (!excludedSocket) return logger.debug('Shouldnt happen, No socket in map')
    console.log('sessionId: ', sessionId)
    if (room) excludedSocket.broadcast.to(room).emit(type, data)
    else excludedSocket.broadcast.emit(type, data)
}


module.exports = {
    connectSockets,
    emitToAll,
    broadcast,
}



