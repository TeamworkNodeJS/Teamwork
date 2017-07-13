class Publication {
    constructor(options) {
        // this.userId = options.userId;
        // this.title = options.title;
        // this.date = options.date;
        // this.publisher = options.publisher;
        // this.publisherInfo = options.publisherInfo;
        // this.destination = options.destination;
        // this.image1 = options.image1;
        // this.image2 = options.image2;
        // this.image3 = options.image3;
        // this.description1 = options.description1;
        // this.description2 = options.description2;
        // this.description3 = options.description3;
        // this.comments = [];
        // this.likes = [];
    }

    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.title === 'string' &&
            typeof model.date === 'object' &&
            typeof model.publisher === 'string' &&
            model.publisher.length > 3 &&
            model.publisher.length < 40 &&
            typeof model.publisherInfo === 'string' &&
            model.publisherInfo > 10 &&
            model.publisherInfo.length < 100;
    }

    // get id() {
    //     return this._id;
    // }

    static toViewModel(model) {
        const viewModel = new Publication();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }
}

module.exports = Publication;
