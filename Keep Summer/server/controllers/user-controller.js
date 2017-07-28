module.exports = function(data) {
    return {
        getUserProfile(req, res) {
            return res.render('user/profile');
        },
        getUserFavourites(req, res) {
            return res.render('user/favourites');
        },
        addUserFavourites(req, res) {
            const userId = req.user._id;

            return data.users.findById(userId)
                .then((user) => {
                    user.favourites = user.favourites || [];
                    const index = user.
                    favourites.findIndex((x) => x._id === req.body.id);
                    if (index === -1) {
                        return Promise
                        .reject(`This publication
                         is already in your favourites.`);
                    }
                    user.favourites.push({
                        _id: req.body.id,
                        image: req.body.image,
                        title: req.body.title,
                        date: req.body.date,
                        publisher: req.body.publisher,
                    });

                    return data.users.updateById(user);
                })
                .then(() => {
                    req.flash('info',
                        'Your favourites was added successfully!');
                    return res.status(200);
                })
                .catch((err) => {
                    req.flash('error', err);
                    return res.status(400);
                });
        },
    };
};
