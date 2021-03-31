const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const keaton = require('./config/keaton.json');


// const passport = require('./config/passport.js');
const PORT = process.env.PORT || 1717;
process.env.USER = keaton.throw_email;
process.env.PASS = keaton.throw_pass;
// const db = require('./models');

const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static('public'));

// app.use(session({
//   secret: 'the family whiteboard',
//   resave: true,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

//set up handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes
require('./controllers/api_troller')(app);
require('./controllers/html_troller')(app);

// db.sequelize.sync({force: true}).then(() => {
try {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}.`);
    });
} catch (err) {
    console.error(`Error at server.js(35): ${err}`);
}
// });