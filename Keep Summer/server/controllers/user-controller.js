module.exports = function(data) {
    return {
        getUserProfile(req, res) {
            return res.render('user/profile');
        },
    };
};
