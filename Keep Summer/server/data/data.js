const Publication = require('./publication-data');
const Publisher = require('./publisher-data');
const User = require('./user-data');

const init = (db) => {
    return Promise.resolve({
        publications: new Publication(db),
        publishers: new Publisher(db),
        users: new User(db),
    });
};

module.exports = { init };
