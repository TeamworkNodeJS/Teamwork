/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { setupDriver } = require('./utils/setup-driver');
const webdriver = require('selenium-webdriver');
const ui = require('./utils/ui.js');
const async = require('../../server/utilities/async');

describe('Login test', () => {
    let driver = null;

    const appUrl = 'http://localhost:3001';
    // let driver = new webdriver.Builder().build();

    beforeEach(() => {
        driver = setupDriver('chrome');
        ui.setDriver(driver);
        return driver.get(appUrl);
    });

    afterEach(() => {
        return driver.quit();
    });

    describe('Successful login with valid username and password given', () => {
        // beforeEach((done) => {
        //     async()
        //     .then(() => ui.click('.container button'))
        //     .then(() => ui.click('.btn'))
        //     .then(() => ui.click('#btn-signin'));
        // });
        const username = 'Darin96';
        const password = 'darin96*';

        it('expect to redirect to home page', (done) => {
            async()
                .then(() => ui.click('.container button'))
                .then(() => ui.click('.btn'))
                .then(() => {
                    return driver.findElement(webdriver.By.css('#name'));
                })
                .then((tb) => tb.sendKeys(username))
                .then(() => driver.sleep(1000))
                .then(() => {
                    return driver.findElement(webdriver.By.css('#password'));
                })
                .then((tb) => tb.sendKeys(password))
                .then(() => driver.sleep(1000))
                .then(() => ui.click('#btn-signin'))
                .then(() => {
                    return driver.getCurrentUrl();
                })
                .then((url) => {
                    expect(url).to.be.equal('http://localhost:3001/');
                    done();
                });
        });
    });
});
