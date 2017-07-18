class Validator {
    static validatePassword(password, confirmpassword) {
        const pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]){4,10}$/;
        const message = `Password must contain at least one upper case letter, 
        one lower case and one digit, 
        and must be between 2 and 10 symbols long.`;
        const messageConfirm = 'Please confirm password correctly!';
        if (!pattern.test(password)) {
            throw new Error(message);
        }

        if (password !== confirmpassword) {
            throw new Error(messageConfirm);
        }
    }

    static validateName(name) {
        const pattern = /^[a-zA-Z0-9]{2,40}$/;
        const message = `Name must start with a letter, 
        must contain alphanumetrical symbols only 
        and must be between 2 and 40 symbols long.`;
        if (!pattern.test(name)) {
             throw new Error(message);
        }
    }

    static validateEmail(email) {
        const pattern = /^\w.+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
        const message = 'Email can contain latin letters, numbers, _ and .';
        if (!pattern.test(email)) {
            throw new Error(message);
        }
    }

    // static isValid(model) {
    //     return typeof model !== 'undefined' &&
    //         typeof model.title === 'string' &&
    //         typeof model.date === 'object' &&
    //         typeof model.publisher === 'string' &&
    //         model.publisher.length > 3 &&
    //         model.publisher.length < 40 &&
    //         typeof model.publisherInfo === 'string' &&
    //         model.publisherInfo > 10 &&
    //         model.publisherInfo.length < 100;
    // }
}

module.exports = { Validator };
