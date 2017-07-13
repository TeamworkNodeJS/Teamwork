const Publication = require('./publication-data');
const Publisher = require('./publisher-data');

const init = (db) => {
    return Promise.resolve({
        publications: new Publication(db),
        publishers: new Publisher(db),
    });
};

module.exports = { init };
