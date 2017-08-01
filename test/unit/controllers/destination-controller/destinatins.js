const { expect } = require('chai');

describe('auth controller', () => {
    let data = null;
    let controller = null;
    const destinations = ['dest 1', 'dest 2', 'dest 3'];

    let req = null;
    let res = null;

    beforeEach(() => {
        data = {
            destinations: {
                getAll() {
                    return Promise.resolve(destinations);
                },
                getById(id) {
                    return Promise.resolve(destinations[id]);
                },
            },
        };

        controller = require('../../../../server/controllers/destination-controller')(data); // eslint-disable-line
        req = require('../../req-res').getRequestMock();
        req.params = {};
        req.params.id = 0;
        res = require('../../req-res').getResponseMock();
    });

    it('expect getAll() to return all destinations', () => {
        return controller.getAll(req, res)
            .then((models) => {
                expect(res.viewName)
                    .to.be.equal('destinations/all-destinations');
            });
    });
    it('expect getAll() to return all destinations', () => {
        return controller.getById(req, res)
            .then((models) => {
                expect(res.viewName)
                    .to.be.equal('destinations/destination');
            });
    });
});
