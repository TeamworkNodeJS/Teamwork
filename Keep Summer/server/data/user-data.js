const { ObjectId } = require('mongodb').ObjectId;
const BaseData = require('./base/base-data');

// custom validation
const validator = {
    isValid() {
        return true;
    },
};

class UsersData extends BaseData {
    constructor(db) {
        super(db, { name: 'User' }, validator);
    }

    findByUsername(username) {
        const result = this.collection.findOne({
            username: username,
        });

        return result;
    }

    findById(id) {
        const result = this.collection.findOne({ _id: new ObjectId(id) });

        return result;
    }

    checkPassword(username, password) {
        return this.collection
            .findOne({
                username,
            })
            .then((user) => {
                if (!user) {
                    throw new Error('Invalid user');
                }

                if (user.password !== password) {
                    throw new Error('Invalid password');
                }

                return true;
            });
    }
}

module.exports = UsersData;
