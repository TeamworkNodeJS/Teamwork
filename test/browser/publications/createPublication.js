/* eslint-disable no-unused-expressions */
// const { expect } = require('chai');
const { setupDriver } = require('../utils/setup-driver');
// const webdriver = require('selenium-webdriver');
const ui = require('../utils/ui.js');
// const async = require('../../../server/utilities/async');
const publicationUtils = require('../utils/publication.utils');

describe('Publication tests', () => {
    let driver = null;

    const appUrl = 'http://localhost:3001';
    //  let driver = new webdriver.Builder().build();

    beforeEach(() => {
        driver = setupDriver('chrome');
        ui.setDriver(driver);
        publicationUtils.setDriver(driver);
        return driver.get(appUrl);
    });

    afterEach(() => {
        return driver.quit();
    });

    describe('Create a publication', () => {
        // beforeEach(() => {

        // });

        it('expect to create a new publication', (done) => {
            publicationUtils.createPublication();
            // .then(() => {
            //     expect(driver.getCurrentUrl()).to.be.equal('http://localhost:3001/publications');
            //     done
            // });
        });
    });
});

