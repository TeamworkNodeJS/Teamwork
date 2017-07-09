const attatchTo = (app, data) => {
    app.get('/', (req, res) => {
        return res.render('home/home');
    });

    app.get('/home', (req, res) => {
        return res.render('home/home');
    });

    app.get('/contact', (req, res) => {
        return res.render('forms/contact-form');
    });
};

module.exports = { attatchTo };
