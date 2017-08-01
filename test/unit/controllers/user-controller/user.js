const { expect } = require('chai');

describe('user controller', () => {
    let data = null;
    let controller = null;
    const users = ['cuki', 'doncho', 'steven'];

    let req = null;
    let res = null;

    beforeEach(() => {
        data = {
            users: {
            create() {
                return users.push('Test')
                .then((model) =>{
                    return model;
                });
            },
            findByUsername() {
                return Promise.resolve(0);
            },
        },
        };

        controller = require('../../../../server/controllers/user-controller')(data); // eslint-disable-line
        req = {
            body: {
                firstname: 'Test',
                lastname: 'Test',
                username: 'Test',
                email: 'test@abv.bg',
                password: 'test1234*',
                confirmpassword: 'test1234*',
            },
            flash() {},
        };
        req = require('../../req-res').getRequestMock();
        res = require('../../req-res').getResponseMock();
    });

    it('expect getUserProfile() to return user profile', () => {
        controller.getUserProfile(req, res);
        expect(res.viewName).to.be.equal('user/profile'); // eslint-disable-line
    });
    it('expect getUserFavourites() to return user favourites', () => {
        controller.getUserFavourites(req, res);
        expect(res.viewName).to.be.equal('user/favourites'); // eslint-disable-line
    });
});
