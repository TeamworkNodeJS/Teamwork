const { expect } = require('chai');

describe('publication controller', () => {
    let controller = null;
    const data = null;
    let req = null;
    let res = null;

    beforeEach(() => {
        controller = require('../../../../server/controllers/publications-controller')(data); // eslint-disable-line
        req = require('../../req-res').getRequestMock();
        res = require('../../req-res').getResponseMock();
    });

    it('expect getPublicationForm() to return publication form', () => {
        controller.getPublicationForm(req, res);
        expect(res.viewName).to.be.equal('forms/publication-form'); // eslint-disable-line
    });
});
