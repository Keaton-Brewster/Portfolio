$(document).ready(() => {
    
    //todo At some point in time this should be a modal
    const thankYou = () => {
        alert('Thank you for reaching out! I will get in touch with you as soon as I can!')
    }

    const sendMail = (message) => {
        if (typeof (message.text) === 'string') {
            $.post('/api/contact', message)
                .then(() => {
                    thankYou();
                })
                .catch(error => console.error(error));
        } else {
            alert('Please fill out all fields');
            return;
        }
    }
    $('form[name=inquireLG]').on('submit', () => {
        const message = {
            from: 'throwawaykeatondev@gmail.com',
            to: 'keatonbrewsterdev@gmail.com',
            subject: `${$('input[name=inquireLG_subject]').val()}, from: ${$('input[name=inquireLG_email]').val()}`,
            text: $('textarea.inquireLG_text').val()
        };

        sendMail(message);
    })

    $('form[name=inquireMD]').on('submit', () => {
        const message = {
            from: 'throwawaykeatondev@gmail.com',
            to: 'keatonbrewsterdev@gmail.com',
            subject: `${$('input[name=inquireMD_subject]').val()}, from: ${$('input[name=inquireMD_email]').val()}`,
            text: $('textarea[name=inquireMD_text]').val()
        };

        sendMail(message);
    })

    $('form[name=inquireSM]').on('submit', () => {
        const message = {
            from: 'throwawaykeatondev@gmail.com',
            to: 'keatonbrewsterdev@gmail.com',
            subject: `${$('input[name=inquireSM_subject]').val()}, from: ${$('input[name=inquireSM_email]').val()}`,
            text: $('textarea[name=inquireSM_text]').val()
        };

        sendMail(message);
    })
})