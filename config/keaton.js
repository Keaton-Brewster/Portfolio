const atob = require('atob');

module.exports = {
    first_name: "Keaton",
    last_name: "Brewster",
    middle_name: "Patrick",
    title: "Fullstack Web Developer",
    greeting: "Welcome, I'm glad you came!",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "MySQL",
        "MongoDB",
        "jQuery",
        "Bootstrap"
    ],
    bio: "Born and Raised in Topeka, KS, I made my escape to Kansas City in 2019 and haven't looked back (except for all the times I go to see family and old friends...) I started coding in the summer of 2020, and fell in love. I attended KU's coding bootcamp in the fall of 2020 to accelerate my learning, and get into the industry quicker, as I couldn't wait to code professionally. I live in south Kansas City with my wife in our newly purchased home, and in my free time I enjoy exploring new music.",
    phone_number: "",
    email: "keatonbrewsterdev@gmail.com",
    sender: "dGhyb3dhd2F5a2VhdG9uZGV2QGdtYWlsLmNvbQ==",
    getter: "S2VhdG9uRGV2",
    _goLive: function () {
        process.env.USER = this.sender;
        process.env.PASS = this.getter
    },
    _configureMailer: function () {
        return {
            service: 'gmail',
            auth: {
                user: atob(this.sender),
                pass: atob(this.getter)
            }
        }
    }
}