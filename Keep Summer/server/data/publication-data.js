const BaseData = require('./base-data');
const Publication = require('../models/publication-model');

class PublicationData extends BaseData {
    constructor(db) {
        super(db, Publication, Publication);
    }

    _isModelValid(model) {
        // custom validation 
        return super._isModelValid(model);
    }
}

module.exports = PublicationData;
