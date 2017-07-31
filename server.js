/* eslint-disable no-console */

const async = () => {
    return Promise.resolve();
};

const config = require('./server/configurations');
const socket = require('socket.io');

let numClients = 0;

// let server = null;
async()
.then(() => require('./server/db').init(config.connectionString))
    .then((db) => require('./server/data').init(db))
    .then((data) => require('./server/config').init(data))
    .then((app) => {
        return app.listen(config.port, () =>
            console.log(`Server listen on :${config.port}`));
    })
    .then((server) => {
        // Socket setup & pass server
        const io = socket(server);
        io.on('connection', (_socket) => {
            console.log('made socket connection', _socket.id);

            // Handle chat event
            socket.on('chat', function(data) {
                // console.log(data);
                io.sockets.emit('chat', data);
            });

            // Handle typing event
            socket.on('typing', function(data) {
                socket.broadcast.emit('typing', data);
            });

                numClients++;
                io.emit('stats', {
                    numClients: numClients,
                });

                console.log('Connected clients:', numClients);

                socket.on('disconnect', function() {
                    numClients--;
                    io.emit('stats', {
                        numClients: numClients,
                    });

                    console.log('Connected clients:', numClients);
                });
        });
    })
    .catch((err) => {
        console.log(err);
    });
