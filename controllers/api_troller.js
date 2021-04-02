const nodemailer = require('nodemailer');
require('dotenv').config();
const Mailer = require('../config/keaton');

Mailer._goLive();

const transport = nodemailer.createTransport(Mailer._configureMailer());

module.exports = (app) => {
    app.post('/api/contact', (request, response) => {
        console.log(process.env.USER, process.env.PASS);

        transport.verify((err, succ) => {
            if (err) return console.log(err)
            else console.log(succ);
        });
        try {
            transport.sendMail(request.body, (err, res) => {
                if (err) {
                    response.sendStatus(400);
                } else {
                    response.sendStatus(200);
                }
            })
        } catch {
            res.sendStatus(500)
        }
    })
}