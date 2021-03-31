const keaton = require('../config/keaton.json');

module.exports = (app) => {
    app.get('/', (request, response) => {
        // do something
        response.end();
    })

    app.get('/home', (request, response) => {
        response.render('home', {});
    })

    app.get('/contact', (request, response) => {
        response.render('contact', {});
    })

    app.get('/about', (request, response) => {
        response.render('about', {
            keaton: keaton
        });
    })

    app.get('/my_work', (request, response) => {
        response.render('my_work', {keaton: keaton})
    })
}