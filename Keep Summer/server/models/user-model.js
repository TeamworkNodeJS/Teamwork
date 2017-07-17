class User {
    costructor(firstname, lastname, username, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.date = new Date(Date.now());
        this.publications = [];
        this.favourites = [];
    }
}

module.exports = User;

