const Keaton = require('../config/keaton');

module.exports = (app) => {
    // app.get('/', (request, response) => {
    //     // do something
    //     response.end();
    // })

    app.get('/', (request, response) => {
        response.render('home', {
            page: 'MAIN'
        });
    })

    app.get('/contact', (request, response) => {
        Keaton._goLive();
        response.render('contact', {
            page: 'CONTACT'
        });
    })

    app.get('/about', (request, response) => {
        response.render('about', {
            keaton: Keaton,
            page: 'ABOUT'
        });
    })

    app.get('/my_work', (request, response) => {
        response.render('my_work', require('../works')());
    })
}