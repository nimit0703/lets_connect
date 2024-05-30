const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const { setupWebSocket } = require('./services/chatService');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

setupWebSocket(io);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
