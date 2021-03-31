$(document).ready(() => {
            $('form.inquire').on('submit', () => {
                        const message = {
                                from: 'throwawaykeatondev@gmail.com',
                                to: 'keatonbrewsterdev@gmail.com',
                                subject: `${$('input[name=subject]').val()}, from: ${$('input.user_email').val()}`,
            text: $('textarea[name=message]').val()
        };

        console.log(message);

        if (typeof(message.text) === 'string') {
            $.post('/api/contact', message)
                .then(() => {
                    alert('Thank you for reaching out!')
                })
                .catch(error => console.error(error));
        } else {
            alert('Please fill out all fields');
            return;
        }
    })
})