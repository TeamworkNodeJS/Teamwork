let driver = null;

const ui = require('./ui');

const async = require('../../../server/utilities/async');

const login = (username, password) => {
    async()
            .then(() => ui.click('.container button'))
            .then(() => ui.click('.btn'))
            .then(() => ui.setValue('#name', username))
            .then(() => ui.setValue('#password', password))
            .then(() => ui.click('#btn-signin'));
};

module.exports = {
    setDriver(_driver) {
        driver = _driver;
        ui.setDriver(driver);
    },
    login,
};
