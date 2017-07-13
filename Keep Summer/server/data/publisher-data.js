const BaseData = require('./base/base-data');

// custom validation
const validator = {
    isValid() {
        return true;
    },
};

class PublisherData extends BaseData {
    constructor(db) {
        super(db, { name: 'Publisher' }, validator);
    }
}

module.exports = PublisherData;
