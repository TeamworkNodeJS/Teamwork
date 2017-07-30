/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { setupDriver } = require('./utils/setup-driver');
const webdriver = require('selenium-webdriver');
const async = require('../../server/utilities/async');

describe('Home test', () => {
    let driver = null;
    const appUrl = 'http://localhost:3001';

    // let driver = new webdriver.Builder()
    //                 .build();

    beforeEach(() => {
        driver = setupDriver('chrome');
        return driver.get(appUrl);
    });

    it('check h1 to contain "Keep Your"', (done) => {
        async()
        .then(() => {
           return driver.findElement(
                webdriver.By.css('h1')
            );
        })
        .then((el) => {
            return el.getText();
        })
        .then((text) => {
            expect(text).to.contain('Keep Your');
            done();
        });
    });
});
