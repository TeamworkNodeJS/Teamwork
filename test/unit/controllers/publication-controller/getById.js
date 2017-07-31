const { expect } = require('chai');

//  getById(req, res) {
//                 const id = req.params.id;

//                 return data.publications.getById(id)
//                     .then((publication) => {
//                         if (!publication) {
//                             return res.render('errors/not-found');
//                         }
//                         return res.render('publication-views/publication', {
//                             model: publication,
//                         });
//                     });
//             },

describe('publication controller', () => {
    let data = null;
    let controller = null;
    const publications = ['publication 1', 'publication 2', 'publication 3'];

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
        //  req = require('../../req-res').getRequestMock();
        res = require('../../req-res').getResponseMock();
    });

    req = {};
    req.params= {};
    req.params.id = 0;

    it('expect getId to return correct publication', () =>{
        return controller.getById(req, res)
            .then(() => {
                expect(res.model).to.be.deep.equal({
                    model: publications[0],
                });
                expect(res.viewName).to.be.equal('publication-views/publication'); // eslint-disable-line
            });
    });
});

