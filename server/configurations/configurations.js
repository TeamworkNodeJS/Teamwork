/* globals process */


// eslint-disable-next-line no-process-env
const port = 80;

const connectionString = 'mongodb://ec2-18-220-65-226.us-east-2.compute.amazonaws.com:27017/summer';

const sessionSecret = 'pink cat';

//const connectionString = 'mongodb://Admin:admin@ds143532.mlab.com:43532/summer';

module.exports = {
    port, connectionString, sessionSecret,
};
