const { expect } = require('chai');

describe('auth controller', () => {
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

        controller = require('../../../../../server/controllers/auth-controller')(data); // eslint-disable-line
        req = {
            body: {
                firstname: 'Test',
                lastname: 'Test',
                username: 'Test',
                email: 'test@abv.bg',
                password: 'test1234*',
                confirmpassword: 'test1234*',
            },
        };
        //  req = require('../../../req-res').getRequestMock();
        res = require('../../../req-res').getResponseMock();
    });

    it('expect getLoginForm() to return login form', () => {
        controller.getLoginForm(req, res);
        expect(res.viewName).to.be.equal('forms/signin-form'); // eslint-disable-line
    });

    it('expect getRegisterForm() to return register form', () => {
        controller.getRegisterForm(req, res);
        expect(res.viewName).to.be.equal('forms/register-form'); // eslint-disable-line
    });

    it('expect singUp() to create a new user', () => {
        return controller.signUp(req, res)
            .then(() => {
                expect(users).to.contains('Test');
            });
    });
});
