const LATEST_COUNT = 3;

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
                console.log(req.params);

                return data.publications.getById(id)
                    .then((publication) => {
                        if (!publication) {
                            return res.status(404)
                                .res.send('<h1>Error! Not found</h1>');
                        }
                        return res.render('publication-views/publication', {
                            model: publication,
                        });
                    });
            },
            create(req, res) {
                const publication = req.body;

                // validation
                const publisher = {
                    name: publication.publisher,
                };

                 return Promise
            .all([
                data.publications.create(publication),
                data.publishers.findOrCreateBy(publisher),
            ])
            .then(([dbPublication, dbPublisher]) => {
                dbPublisher.name = publication.publisher;

                dbPublisher.publication = dbPublisher.publication || [];
                dbPublisher.publication.push({
                    _id: dbPublication._id,
                    title: dbPublication.title,
                    name: dbPublication.publisher,
                    info: dbPublication.info,
                });

                dbPublication.publisher = {
                    _id: dbPublisher._id,
                    name: dbPublisher.name,
                    info: dbPublisher.info,
                };
                return Promise.all([
                    data.publications.updateById(dbPublication),
                    data.publishers.updateById(dbPublisher),
                ]);
            })
            .then(() => {
                return res.redirect('/publications');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/publications/add-publication');
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
            };
        };
