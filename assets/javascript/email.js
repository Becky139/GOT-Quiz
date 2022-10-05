function SendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.send("service_f3pirha","template_gd0r23n", this)
            .then(function() {
                alert('SUCCESS!');
            }, function(error) {
                alert('FAILED...', error);
            });
    });
}
