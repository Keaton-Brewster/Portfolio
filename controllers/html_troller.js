const Keaton = require('../config/keaton');

module.exports = (app) => {
    // app.get('/', (request, response) => {
    //     // do something
    //     response.end();
    // })

    app.get('/', (request, response) => {
        response.render('home', {});
    })

    app.get('/contact', (request, response) => {
        Keaton._goLive();
        response.render('contact', {});
    })

    app.get('/about', (request, response) => {
        response.render('about', {
            keaton: Keaton
        });
    })

    app.get('/my_work', (request, response) => {
        response.render('my_work', {keaton: Keaton})
    })
}