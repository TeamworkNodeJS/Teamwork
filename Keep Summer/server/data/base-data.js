const ObjectId = require('mongodb').ObjectId;

class BaseData {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
        let result = this.collection.find().toArray();

        if (this.ModelClass.toViewModel) {
            result = result.then((models) => {
                return models
                    .map((model) =>
                        this.ModelClass.toViewModel(model));
            });
        }

        return result;
    }

    getById(id) {
        const result = this.collection.findOne({ _id: new ObjectId(id) });

            return result;
    }

    getLatest(count) {
        const result = this.collection
        .find({})
        .sort({ 'date': -1 }).limit(count);

        return result;
    }

    getPopolarPublishers() {
        const result = this.collection
        .aggregate([{ $group: { _id: '$publisher',
        num_publications: { $sum: 1 } } }]);
        return result;
    }

    create(model) {
        if (!this._isModelValid(model)) {
            return Promise.reject('Invalid model');
        }

        return this.collection.insert(model)
            .then(() => {
                return this.ModelClass.toViewModel(model);
            });
    }

    _isModelValid(model) {
        return this.validator.isValid(model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;
