

$(document).ready(function () {
    $('#sign-up-button').on('click', function () {
        $('#sign-up-type-modal').modal({
            fadeDuration: 250,
            fadeDelay: 0.80
        });
    });

    $('#app-sign-up-button').on('click', function () {
        $('#register-modal').modal({
            fadeDuration: 250,
            fadeDelay: 0.80
        });
    });
});