const BaseData = require('./base/base-data');
const User = require('../models/user-model');

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
