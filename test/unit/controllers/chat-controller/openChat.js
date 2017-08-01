const { expect } = require('chai');

describe('auth controller', () => {
    let data = null;
    let controller = null;
    let req = null;
    let res = null;

    beforeEach(() => {
        data = {
            users: {},
        };

        controller = require('../../../../server/controllers/chat-controller')(data); // eslint-disable-line
        req = require('../../req-res').getRequestMock();
        req.user = {};
        req.user.username = 'test';
        res = require('../../req-res').getResponseMock();
    });

    it('expect openChat() to enter chat', () => {
        controller.openChat(req, res);
        expect(res.viewName).to.be.equal('chat/chat'); // eslint-disable-line
    });
});
