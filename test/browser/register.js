const { expect } = require('chai');
const { setupDriver } = require('./utils/setup-driver');
const webdriver = require('selenium-webdriver');
const ui = require('./utils/ui.js');
const async = require('../../server/utilities/async');

describe('Register test', () => {
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

    describe('Successful register with valid username and password given', () => {

        const username = 'Test1';
        const password = 'test1234*';
        const email ='test@gmail.com';

        it('expect to redirect to login', (done) => {
            async()
                .then(() => ui.click('.container button'))
                .then(() => ui.click('#signUp'))
                .then(() => ui.setValue('#firstname', username))
                .then(() => ui.setValue('#lastname', username))
                .then(() => ui.setValue('#username', username))
                .then(() => ui.setValue('#email', email))
                .then(() => ui.setValue('#password', password))
                .then(() => ui.setValue('#confirmpassword', password))
                .then(() => driver.sleep(2000))
                .then(() => ui.click('#btn-signin'))
                .then(() => {
                    return driver.getCurrentUrl();
                })
                .then((url) => {
                    expect(url).to.be.equal('http://localhost:3001/login');
                    done();
                });
        });
    });
});
