module.exports = function(data) {
    return {
        getAll(req, res) {
            return data.guides.getAll()
                .then((guides) => {
                    return res
                        .render('guides/all-guides', {
                            model: guides,
                        });
                });
        },
        getById(req, res) {
            const id = req.params.id;

            return data.guides.getById(id)
                .then((guide) => {
                    if (!guide) {
                        return res.render('errors/not-found');
                    }
                    return res.render('guides/guide', {
                        model: guide,
                    });
                });
        },
    };
};
