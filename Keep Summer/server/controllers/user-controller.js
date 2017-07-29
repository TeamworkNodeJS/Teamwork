const { ObjectId } = require('mongodb').ObjectId;

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
            const id = req.body.id;

            return data.users.findById(userId)
                .then((user) => {
                    user.favourites = user.favourites || [];

                    if (user.favourites.filter((x) => JSON.stringify(x._id) === JSON.stringify(new ObjectId(id))).length > 0) { // eslint-disable-line
                        return Promise.reject(`This publication
                         is already in your favourites.`);
                    }
                    user.favourites.push({
                        _id: new ObjectId(id),
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
        removeUserFavourites(req, res) {
            const username = req.user.username;
            const id = req.body.id;

            return data.users.removeByQuery({ username: username }, { $pull: { favourites: { _id: new ObjectId(id) } } }) // eslint-disable-line

                // //return data.users.findById(userId)                

                // //.then( (result) => {
                //  //   const index = result.favourites
                //  //   .findIndex((x) => x._id === req.body.id);
                //  //   return result.favourites.splice(index, 1);
                //  //   })
                .then(() => {
                    req.flash('info',
                        'Your favourites was removed successfully!');
                    return res.redirect(req.get('referer'));
                })
                .catch((err) => {
                    req.flash('error', err);
                    return res.status(400);
                });
        },
    };
};
