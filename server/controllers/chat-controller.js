module.exports = function(data) {
    return {
        openChat(req, res) {
            const username = req.user.username;
            return res.render('chat/chat', {
               username,
            });
        },
    };
};
