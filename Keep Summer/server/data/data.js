const Publication = require('./publication-data');

const init = (db) => {
    return Promise.resolve({
        publications: new Publication(db),
    });
};

module.exports = { init };
