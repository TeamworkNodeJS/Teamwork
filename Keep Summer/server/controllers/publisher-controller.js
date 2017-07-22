const MOST_POPULAR_COUNT = 4;

module.exports = function(data) {
    return {
        getAll(req, res) {
            return data.publishers.getAll()
                .then((publishers) => {
                    return res
                        .render('publishers/all-publishers', {
                            model: publishers,
                        });
                });
        },
        getById(req, res) {
            const id = req.params.id;

            return data.publishers.getById(id)
                .then((publisher) => {
                    if (!publisher) {
                        return res.render('errors/not-found');
                    }
                    return res.render('publishers/publisher', {
                        model: publisher,
                    });
                });
        },
        getMostPopolarPublishers(req, res) {
            return data.publishers
                .getMostPopolarPublishers(MOST_POPULAR_COUNT)
                .then((publishers) => {
                    return res
                        .send({
                            result: publishers,
                        });
                });
        },
    };
};
