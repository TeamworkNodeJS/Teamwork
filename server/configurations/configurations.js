/* globals process */


const port = 80;
const connectionString = 'mongodb://ec2-18-220-65-226.us-east-2.compute.amazonaws.com:27017/summer';
const sessionSecret = 'pink cat';

// // eslint-disable-next-line no-process-env
// const port = process.env.PORT || 3001;
// const connectionString = 'mongodb://localhost:27017/summer';


module.exports = {
    port, connectionString, sessionSecret,
};

