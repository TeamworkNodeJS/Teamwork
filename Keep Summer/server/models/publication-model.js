class Publication {
    // constructor(options) {
    //     this.title = options.title;
    //     this.date = options.date;
    //     this.publisher = options.publisher;
    //     this.publisherInfo = options.publisherInfo;
    //     this.destination = options.destination;
    //     this.image1 = options.image1;
    //     this.image2 = options.image2;
    //     this.image3 = options.image3;
    //     this.description1 = options.description1;
    //     this.description2 = options.description2;
    //     this.description3 = options.description3;
    //     this.comments = [];
    //     this.likes = [];
    //     this.dislikes = [];
    // }

    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.title === 'string' &&
            typeof model.publisher === 'string' &&
            typeof model.publisherInfo === 'string' &&
            typeof model.destination === 'string' &&
            typeof model.text1 === 'string' &&
            typeof model.text2 === 'string' &&
            typeof model.text3 === 'string';
    }

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
