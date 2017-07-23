class User {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.username === 'string' &&
            model.username.length > 2 &&
            typeof model.passHash === 'string' &&
            model.passHash.length > 6 &&
            typeof model.firstname === 'string' &&
            typeof model.lastname === 'string';
    }

    static toViewModel(model) {
        const viewModel = new User();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = User;
