const { expect } = require('chai');

describe('publication controller', () => {
    let data = null;
    let controller = null;
    const publications = [
        { likes: 0, dislikes: 0 },
        { likes: 0, dislikes: 0 },
        { likes: 0, dislikes: 0 },
    ];

    let req = null;
    let res = null;

    beforeEach(() => {
        data = {
            publications: {
                 getById(id) {
                    return Promise.resolve(publications[id]);
                 },
            },
        };

        controller = require('../../../../server/controllers/publications-controller')(data); // eslint-disable-line
        req = require('../../req-res').getRequestMock();
        req.body = {};
        req.body.id = 0;
        req.flash = () => {};
        res = require('../../req-res').getResponseMock();
    });

    it('expect likePublication to add 1 like to a publication', () =>{
        return controller.likePublication(req, res)
            .then(() => {
                expect(publications[0].likes).to.be.deep.equal(1);
            });
    });

    it('expect disLikePublication to add 1 dislike to a publication', () =>{
        return controller.dislikePublication(req, res)
            .then(() => {
                expect(publications[0].dislikes).to.be.deep.equal(1);
            });
    });
});
