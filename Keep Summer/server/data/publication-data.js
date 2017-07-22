const { ObjectId } = require('mongodb').ObjectId;
const BaseData = require('./base/base-data');

 // custom validation
const validator = {
    isValid() {
        return true;
    },
};

class PublicationData extends BaseData {
    constructor(db) {
        super(db, { name: 'Publication' }, validator);
    }

    getById(id) {
        const result = this.collection.findOne({ _id: new ObjectId(id) });

        return result;
    }

    getLatest(count) {
        const result = this.collection
        .find({})
        .sort({ date: -1 })
        .limit(count)
        .toArray();
        return result;
    }
}

module.exports = PublicationData;
