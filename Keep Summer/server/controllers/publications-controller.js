var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(path.dirname(__dirname));
var shelljs = require('shelljs');


const PUBLISHER_PUBLICATIONS_IMAGES_DIRECTORY = path.join(appDir,'public/Publicated images');
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
        //     const publication = req.body;
        //     const user = req.user;

        //     const publisher = {
        //         name: publication.publisher,
        //         info: publication.publisherinfo,
        //         comments: [],
        //     };

 

        //     // VALIDATIONS

        //    const destination = {
        //        destination: publication.destination,
        //    };

            // console.log(publication);
            // console.log(publisher);

            var clearRoot = function(rootedDir){
                var cleared = rootedDir.replace(appDir, '');
                cleared = cleared.replace('\\public', '');
                cleared = cleared.replace('\\','/');
                return cleared;
            }

            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                
                const publication = fields;
                const user = req.user;

                const publisher = {
                    name: publication.publisher,
                    info: publication.publisherinfo,
                    comments: [],
                };

                // // VALIDATIONS

                const destination = {
                    destination: publication.destination,
                };

                var imagesDir = path.join(PUBLISHER_PUBLICATIONS_IMAGES_DIRECTORY, publisher.name, publication.title);
                shelljs.mkdir('-p', imagesDir);

                var image1RawFullName = files.image1.path;
                var image1FineFullName = path.join(imagesDir, files.image1.name);
                fs.renameSync(image1RawFullName, image1FineFullName);
                var image1RelativeName = clearRoot(image1FineFullName);

                var image2RawFillName = files.image2.path;
                var image2FineFullName = path.join(imagesDir, files.image2.name);
                fs.renameSync(image2RawFillName, image2FineFullName);
                var image2RelativeName = clearRoot(image2FineFullName);

                var image3RawFillName = files.image3.path;
                var image3FineFullName = path.join(imagesDir, files.image3.name);
                fs.renameSync(image3RawFillName, image3FineFullName);
                var image3RelativeName = clearRoot(image3FineFullName);
                
                publication.image1 = image1RelativeName;
                publication.image2 = image2RelativeName;
                publication.image3 = image3RelativeName;

                return Promise
                    .all([
                        data.publications.create(publication),
                        data.publishers.findOrCreateBy(publisher),
                        data.destinations.findOrCreateBy(destination),
                    ])
                    .then(([dbPublication, dbPublisher, dbDestination]) => {
                        dbPublisher.name = publication.publisher;
                        dbPublisher.info = publication.publisherinfo;
                        dbPublisher.comments = [];

                        dbDestination.destination = publication.destination;

                        dbPublisher.publication = dbPublisher.publication || [];
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
                        .publications = dbDestination.publications || [];
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
                    .catch((err) => {
                        req.flash('error', err);
                        return res.redirect('/publications/add-publication');
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
    };
};
