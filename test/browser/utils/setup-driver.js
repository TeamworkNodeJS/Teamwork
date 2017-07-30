const webdriver = require('selenium-webdriver');

const setupDriver = (browser) => {
    const driver = new webdriver.Builder()
    .forBrowser(browser)
    .usingServer('http://localhost:4444/wd/hub')
    .build();

    return driver;
};

module.exports = { setupDriver };
