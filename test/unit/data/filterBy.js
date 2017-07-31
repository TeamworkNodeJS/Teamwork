const { expect } = require('chai');
const sinon = require('sinon');

const BaseData = require('../../../server/data/base/base-data');

describe('BaseData.filterBy()', () => {
    const db = {
        collection: () => { },
    };
    let items = [];
    let expected;

    let ModelClass = null;
    const validator = null;
    let data = null;

    const props = {
        items: {
            $elemMatch: {
                $in: ['3'],
            },
        },
    };

    const toArray = () => {
        return Promise.resolve(expected);
    };

    const find = () => {
        return {
            toArray,
        };
    };
    describe('when there are items in db', () => {
        describe('with default toViewModel', () => {
            beforeEach(() => {
                items = [1, 2, 3, 4];
                expected = items[2];
                sinon.stub(db, 'collection')
                    .callsFake(() => {
                        return { find };
                    });
                ModelClass = class {
                };

                data = new BaseData(db, ModelClass, validator);
            });

            afterEach(() => {
                db.collection.restore();
            });
            it('expect to return searched item', () => {
                return data.filterBy(props)
                    .then((models) => {
                        expect(models).to.deep.equal(expected);
                    });
            });
        });
    });
});
