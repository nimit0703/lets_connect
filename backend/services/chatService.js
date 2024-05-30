// services/chatService.js

const setupWebSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('New WebSocket connection');

        // Handle incoming chat messages
        socket.on('sendMessage', (message) => {
            io.emit('message', message); // Broadcast the message to all connected clients
        });

        // Handle user disconnect
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

module.exports = { setupWebSocket };
