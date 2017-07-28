module.exports = function(data) {
    return {
        openChat(req, res) {
            return res.render('chat/chat');
        },
    };
};
