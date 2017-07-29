 var socket = io.connect('http://localhost:3001');
    socket.on('stats', function(data) {
        console.log('Connected clients:', data.numClients);
    });