const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
})

module.exports = (app) => {
    app.post('/api/contact', (request, response) => {
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