module.exports = function(data) {
    return {
        getHomePage(req, res) {
            const user = req.user;
            return res.render('home/home', {
                user: user,
            });
        },
        getContactForm(req, res) {
            const user = req.user;
            return res.render('forms/contact-form', {
                user: user,
            });
        },
    };
};
