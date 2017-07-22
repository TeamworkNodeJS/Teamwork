const BaseData = require('./base/base-data');
const { ObjectId } = require('mongodb').ObjectId;

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

    getById(id) {
        const result = this.collection.findOne({ _id: new ObjectId(id) });

        return result;
    }


    getMostPopolarPublishers(count) {
        const result = this.collection
        .aggregate([{ $project: { name: '$name',
        sum: { $size: '$publication' } } }])
        .sort({ sum: -1 })
        .limit(count)
        .toArray();
        return result;
    }
}

module.exports = PublisherData;
