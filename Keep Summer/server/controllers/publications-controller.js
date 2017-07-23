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
            const publication = req.body;
            const user = req.user;

            const publisher = {
                name: publication.publisher,
                info: publication.publisherinfo,
                comments: [],
            };

            return Promise
                .all([
                    data.publications.create(publication),
                    data.publishers.findOrCreateBy(publisher),
                ])
                .then(([dbPublication, dbPublisher]) => {
                    dbPublisher.name = publication.publisher;
                    dbPublisher.info = publication.publisherinfo;
                    dbPublisher.comments = [];

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

                    return Promise.all([
                        data.publications.updateById(dbPublication),
                        data.publishers.updateById(dbPublisher),
                        data.users.updateById(user),
                    ]);
                })
                .then(() => {
                    return res.redirect('/publications');
                })
                .catch((err) => {
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
