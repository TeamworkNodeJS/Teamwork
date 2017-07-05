/* eslint max-len: ["error", { "ignoreStrings": true }] */

const { Router } = require('express');

const publications = [{
        id: 1,
        image1: 'cats.jpg',
        date: 'June 26, 2017',
        publisher: 'Nadine Sykora',
        publisherinfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequuntur, quod. Ut rerum, aliquid sapiente assumenda.',
        title: 'South Africa - Living with Big Cats',
        destination: 'Africa',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
        image2: 'cats.jpg',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
    },
    {
        id: 2,
        image1: 'giraffes.jpg',
        date: 'June 30, 2017',
        publisher: 'Nadine Sykora',
        publisherinfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequuntur, quod. Ut rerum, aliquid sapiente assumenda.',
        title: 'South Africa - Living with Giraffes',
        destination: 'Africa',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
        image2: 'giraffes.jpg',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
    },
    {
        id: 3,
        image1: 'cats.jpg',
        date: 'June 30, 2017',
        publisher: 'Mihael Ford',
        publisherinfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequuntur, quod. Ut rerum, aliquid sapiente assumenda.',
        title: 'Adventures in South Africa',
        destination: 'Africa',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
        image2: 'cats.jpg',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
    },
    {
        id: 4,
        image1: 'giraffes.jpg',
        date: 'July 1, 2017',
        publisher: 'Nadine Sykora',
        publisherinfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequuntur, quod. Ut rerum, aliquid sapiente assumenda.',
        title: 'South Africa - My Trip in Photos',
        destination: 'Africa',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
        image2: 'cats.jpg',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
    },
    {
        id: 5,
        image1: 'giraffes.jpg',
        date: 'July 1, 2017',
        publisher: 'Nadine Sykora',
        publisherinfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequuntur, quod. Ut rerum, aliquid sapiente assumenda.',
        title: 'South Africa - My Trip in Photos',
        destination: 'Africa',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
        image2: 'cats.jpg',
        text2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.ipsum dolor sit amet, consectetur adipisicing elit. Quod eum vitae eaque esse similique ducimus maxime quidem recusandae mollitia, deleniti obcaecati itaque consequatur soluta, quam accusantium repellendus eius facere ipsam.',
    },
];

const attatch = (app) => {
    const router = new Router();

    router
        .get('/api/publications', (req, res) => {
            res.render('publication-views/all-publications', {
                model: publications,
            });
        })
        .get('/api/publications/:id', (req, res) => {
            const id = parseInt(req.params.id, 10);
            const publication = publications.find((i) => i.id === id);
            if (!publication) {
                return res.status(404)
                .res.send('<h1>Error! Not found</h1>');
            }
            return res.render('publication-views/publication', {
                model: publication,
            });
        })
        .post('/api/publications', (req, res) => {
            const publication = req.body;
            publication.id = publications.length + 1;
            publications.push(publication);
            res.render('publication-views/publication', {
                model: publication,
            });
            // return res.redirect('/items');
        });

    app.use('/', router);
};

module.exports = attatch;
