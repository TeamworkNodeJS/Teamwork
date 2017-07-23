class Publisher {
    static isValid(model) {
        return true;
            // typeof model !== 'undefined' &&
            // typeof model.name === 'string' &&
            // typeof model.info === 'string';
    }

    static toViewModel(model) {
        const viewModel = new Publisher();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Publisher;
