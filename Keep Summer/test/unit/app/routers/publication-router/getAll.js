const { expect } = require('chai');


/*
getAll(req, res) {
            return data.publications.getAll()
                .then((publications) => {
                    return res
                        .render('publication-views/all-publications', {
                            model: publications,
                        });
                });
*/


describe('publication controller', () => {
    let data = null;
    let controller = null;
    let publications = ['publication 1', 'publication 2' , 'publication 3'];

    let req = null;
    let res = null;

    beforeEach(() => {
        data = {
            publications : {
                 getAll() {
                    return Promise.resolve(publications);
                 },
            },
        };

        controller = require('../../../../../server/controllers/publications-controller')(data);
        req = require('../../../req-res').getRequestMock();
        res = require('../../../req-res').getResponseMock();
    });

    it('expect getAll to return all publications', () =>{
        return controller.getAll(req,res)
            .then(() => {
                expect(res.model).to.be.deep.equal({
                    model: publications,
                });
                expect(res.viewName).to.be.equal('publication-views/all-publications');
            });
    });
});