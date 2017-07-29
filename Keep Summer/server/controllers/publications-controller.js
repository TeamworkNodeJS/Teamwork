/* globals __dirname */
/* eslint max-len: ["error", 80] */
const { ObjectId } = require('mongodb').ObjectId;

const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(path.dirname(__dirname));
const shelljs = require('shelljs');

/* eslint-disable-line no-extend-native */
const PUBLISHER_PUBLICATIONS_IMAGES_DIRECTORY =
path.join(appDir, 'public/Publicated images');

const LATEST_COUNT = 4;

module.exports = function(data) {
        return {
            getAll(req, res) {
                return data.publications.getAll()
                    .then((publications) => {
                        return res
                            .render('publication-views/all-publications', {
                                model: publications,
                            });
                    });
            },
            getById(req, res) {
                const id = req.params.id;

                return data.publications.getById(id)
                    .then((publication) => {
                        if (!publication) {
                            return res.render('errors/not-found');
                        }
                        return res.render('publication-views/publication', {
                            model: publication,
                        });
                    });
            },
            create(req, res) {
                // const publication = req.body;!!!!!!!!!!!!!!!!!!!!!!!
                // const user = req.user;!!!!!!!!!!!!!!!!!!!!!!

                // VALIDATIONS !!!!!!!!!!!!!!!!!!!!!!!!!

                const clearRoot = function(rootedDir) {
                    let cleared = rootedDir.replace(appDir, '');
                    cleared = cleared.replace('\\public', '');
                    cleared = cleared.replace('\\', '/');
                    return cleared;
                };

                const form = new formidable.IncomingForm();
                form.parse(req, function(err, fields, files) {
                        const publication = fields;
                        publication.likes = 0;
                        publication.dislikes = 0;
                        const user = req.user;

                        const publisher = {
                            name: publication.publisher,
                            info: publication.publisherinfo,
                            comments: [],
                        };

                         const destination = {
                             destination: publication.destination,
                         };

                        const imagesDir = path
                        .join(PUBLISHER_PUBLICATIONS_IMAGES_DIRECTORY,
                             publisher.name, publication.title);
                            shelljs.mkdir('-p', imagesDir);

                const image1RawFullName = files.image1.path;
                const image1FineFullName = path
                .join(imagesDir, files.image1.name);
                fs.renameSync(image1RawFullName, image1FineFullName);
                const image1RelativeName = clearRoot(image1FineFullName);

                const image2RawFillName = files.image2.path;
                const image2FineFullName = path
                .join(imagesDir, files.image2.name);
                fs.renameSync(image2RawFillName, image2FineFullName);
                const image2RelativeName = clearRoot(image2FineFullName);

                const image3RawFillName = files.image3.path;
                const image3FineFullName = path
                .join(imagesDir, files.image3.name);
                fs.renameSync(image3RawFillName, image3FineFullName);
                const image3RelativeName = clearRoot(image3FineFullName);

                publication.image1 = image1RelativeName;
                publication.image2 = image2RelativeName;
                publication.image3 = image3RelativeName;

                return Promise
                    .all([
                        data.publications.create(publication),
                        data.publishers.findOrCreateBy(publisher),
                        data.destinations.findOrCreateBy(destination),
                    ])
                    .then(([dbPublication, dbPublisher, dbDestination]) => {  // eslint-disable-line
                        dbPublisher.name = publication.publisher;
                        dbPublisher.info = publication.publisherinfo;
                        dbPublisher.comments = [];

                        dbDestination.destination =
                            publication.destination;

                        dbPublisher.publication =
                            dbPublisher.publication || [];
                        dbPublisher.publication.push({
                            _id: dbPublication._id,
                            title: dbPublication.title,
                            image: dbPublication.image1,
                        });

                        user.publications = user.publications || [];
                        user.publications.push({
                            _id: dbPublication._id,
                            title: dbPublication.title,
                            image: dbPublication.image1,
                        });

                        dbDestination
                            .publications =
                            dbDestination.publications || [];
                        dbDestination.publications.push({
                            _id: dbPublication._id,
                            destination: dbPublication.destination,
                            title: dbPublication.title,
                            publisher: dbPublication.publisher,
                            date: dbPublication.date,
                            image: dbPublication.image1,
                        });

                        return Promise.all([
                            data.publications.updateById(dbPublication),
                            data.publishers.updateById(dbPublisher),
                            data.users.updateById(user),
                            data.destinations.updateById(dbDestination),
                        ]);
                    })
                    .then(() => {
                        return res.redirect('/publications');
                    })
                    .catch((error) => {
                        req.flash('error', error);
                        return res.redirect('/publications/add-publication'); // eslint-disable-line
                    });
                });
            },
            getLatestPublications(req, res) {
                return data.publications
                    .getLatest(LATEST_COUNT)
                    .then((publications) => {
                        return res
                            .send({
                                result: publications,
                            });
                    });
            },
            getPublicationForm(req, res) {
                return res.render('forms/publication-form');
            },
            likePublication(req, res) {
                const id = req.body.id;

                return data.publications.getById(id)
                    .then((publication) => {
                        publication.likes = publication.likes + 1;

                        return data.publications
                            .updateById(publication);
                    })
                    .then(() => {
                        req.flash('info',
                            'Your like was added successfully!');
                        return res.redirect(req.get('referer'));
                    })
                    .catch((err) => {
                        req.flash('error', err);
                        return res.status(400);
                    });
            },
            dislikePublication(req, res) {
                const id = req.body.id;

                return data.publications.getById(id)
                    .then((publication) => {
                        publication.dislikes = publication.dislikes + 1;

                        return data.publications
                            .updateById(publication);
                    })
                    .then(() => {
                        req.flash('info',
                            'Your like was added successfully!');
                        return res.redirect(req.get('referer'));
                    })
                    .catch((err) => {
                        req.flash('error', err);
                        return res.status(400);
                    });
            },
            removePublication(req, res) {
                const id = req.body.id;
                const publisher = req.body.publisher;
                const destination = req.body.destination;
                const username = req.user.username;

                return Promise
                    .all([
                        data.publications.removeById(id),
                        data.publishers.removeByQuery({ name: publisher }, { $pull: { publication: { _id: new ObjectId(id) } } }),// eslint-disable-line
                        data.destinations.removeByQuery({ destination: destination }, { $pull: { publications: { _id: new ObjectId(id) } } }),// eslint-disable-line
                        data.users.removeByQuery({ username: username }, { $pull: { publications: { _id: new ObjectId(id) } } }), // eslint-disable-line
                    ])
                    .then(() => {
                        req.flash('info',
                            'Your publication was removed successfully!'); // eslint-disable-line
                        return res.status(200);
                        // return res.redirect('/publications');
                    })
                    .catch((err) => {
                        req.flash('error', err);
                        return res.status(400);
                    });
            },
    };
};
