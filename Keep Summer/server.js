const async = () => {
    return Promise.resolve();
};

const config = require('./server/config');

async()
    .then(() => require('./server/db').init(config.connectionString))
    .then((db) => require('./server/data').init(db))
    .then((data) => require('./server/app').init(data))
    .then((app) => {
        app.listen(config.port, () =>
        console.log(`Server listen on :${config.port}`));
    });
