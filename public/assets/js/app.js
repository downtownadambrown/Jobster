

$(document).ready(function () {
    // selects the sign up button 
    $('#sign-up-button').on('click', function () {
        $('#sign-up-type-modal').modal({
            fadeDuration: 250,
            fadeDelay: 0.80
        });
    });
//modal for registering a applicant
    $('#app-sign-up-button').on('click', function () {
        $('#register-modal').modal({
            fadeDuration: 250,
            fadeDelay: 0.80
        });
    });
    
    //modal for registering a manager 
    $('#mgr-sign-up-button').on('click', function () {
    $('#managerInput-modal').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
    });
});

//selects the job button
$('#job-button').on('click', function () {
    $('#job-modal').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
    });
});
//modal for creating a job form
$('#add-a-job-button').on('click', function () {
    $('#adding-job-modal').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
    });
});
});

