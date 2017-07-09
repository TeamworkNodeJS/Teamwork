/* globals process */

// eslint-disable-next-line no-process-env
const port = process.env.PORT || 3001;
const connectionString = 'mongodb://localhost:27017/summer';

// const connectionString = 'mongodb://localhost:27017/summer';
// const connectionString = 'mongodb://Admin:admin@ds143532.mlab.com:43532/summer';

module.exports = {
    port, connectionString,
};
