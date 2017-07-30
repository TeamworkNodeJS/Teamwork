let driver = null;

const ui = require('./ui');

const async = require('../../../server/utilities/async');

const username = 'Darin96';
const password = 'darin96*';
const imagePath = 'C:\\Users\\Darin-PC\\Desktop\\TeamProject\\Teamwork\\Keep Summer\\public\\Publicated images\\Jane Adam\\The Best Time to Go to Bali\\bali01.jpg';
const test = 'Test';
const date = '08/02/2017';

const createPublication = () => {
    async()
            .then(() => ui.click('.container button'))
            .then(() => ui.click('.btn'))
            .then(() => ui.setValue('#name', username))
            .then(() => driver.sleep(1000))
            .then(() => ui.setValue('#password', password))
            .then(() => driver.sleep(1000))
            .then(() => ui.click('#btn-signin'))
            .then(() => ui.click('#adventures'))
            .then(() => driver.sleep(1000))
            .then(() => driver.executeScript('window.scrollTo(0, document.body.scrollHeight);'))
            .then(() => ui.click('#publicationForm'))
            .then(() => ui.setValue('#title', test))
            .then(() => ui.setValue('#date', date))
            .then(() => ui.setValue('#text1', test))
            .then(() => ui.setValue('#publisher', test))
            .then(() => ui.setValue('#publisher-info', test))
            .then(() => ui.setValue('#image1', imagePath))
            .then(() => ui.setValue('#image2', imagePath))
            .then(() => ui.setValue('#image3', imagePath))
            .then(() => driver.sleep(1000))
            .then(() => ui.click('#addPublication'));
};

module.exports = {
    setDriver(_driver) {
        driver = _driver;
        ui.setDriver(driver);
    },
    createPublication,
};
