/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { setupDriver } = require('../utils/setup-driver');
const webdriver = require('selenium-webdriver');
const ui = require('../utils/ui.js');
const async = require('../../../server/utilities/async');

describe('Publication tests', () => {
    let driver = null;

    const appUrl = 'http://localhost:3001';
    //  let driver = new webdriver.Builder().build();

    beforeEach(() => {
        driver = setupDriver('chrome');
        ui.setDriver(driver);
        return driver.get(appUrl);
    });

    afterEach(() => {
        return driver.quit();
    });

    describe('Create a publication', () => {
        // beforeEach(() => {

        // });

        const username = 'Darin96';
        const password = 'darin96*';

        it('expect to create a new publication', (done) => {
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
            .then(() => ui.click('#publicationForm'));
        });
    });
});

