module.exports = function(data) {
    return {
        getAll(req, res) {
            return data.publications.getAll()
                .then((publications) => {
                    return res.render('publication-views/all-publications', {
                        model: publications,
                    });
                });
        },
        getById(req, res) {
            const id = req.params.id;
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
    };
};
