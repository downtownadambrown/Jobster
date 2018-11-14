$(function (){   
//*************FUNCTION managerInput*************** */
// retrieves manager's input data when submit button is clicked
const collectManagerInput = function () {
    //Takes in the data from the managers form and clears form after submit.
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the manager can hit enter instead of clicking the button if they want
    console.log("managerInput");
    //Grab the form elements and fill the applicant object
    let manager = {
        firstName: $('#manager-name-first').val().trim(),
        lastName: $('#manager-name-last').val().trim(),
        email: $('#manager-email').val().trim(),
        phone: $('#manager-phone').val().trim(),
         image: $('#manager-image').val().trim(),
        password: $('#manager-pw').val().trim(),
        companyName: $('#manager-company').val().trim(),
        companySite: $('#manager-url').val().trim(),
        companyLinkedIn: $('#manager-linkedIn').val().trim(),
        companyZipcode: $('#manager-zip').val().trim()
    };
    console.log("manager", manager);
    //Clear the input form
    $('#manager-name-first').val('');
    $('#manager-name-last').val('');
    $('#manager-email').val('');
    $('#manager-phone').val('');
    $('#manager-image').val('');
    $('#managerPw').val('');
    $('#manager-company').val('');
    $('#manager-url').val('');
    $('#manager-linkedIn').val('');
    $('#manager-zip').val('');

    postManager(manager);
};

const postManager = function (data) {
    console.log("postManager");
    console.log("Data:", data);
    //Post the managers input data
    $.ajax({
        method: 'POST',
        url: ('/api/manager'),
        data: data
    }).then(function (res) {
        console.log("Res:", res);
        // Redirect to managers-profile page
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userId", res.id);
        window.location.replace("/manager-profile");
    });
};
const renderedData = function () {
    console.log('renderedData');

    //Retrieve the newly created manager data
    $.get('/api/manager/')
    .then(function (data) {
        console.log("data inside get /api/manager promise", data);

        //Append the information to the page
        $('#manager-first-name').append('Manager');


        $('#first-name').append('#manager-name-first');
        $('#last-name').append('#manager-name-last');
        $('#email').append('#manager-email');
        $('#phone').append('#manager-phone');
        $('#company').append('#manager-company');
        $('#linkedIn').append('#manager-linkedIn');
        $('#companyUrl').append('#manager-url');
        $('#zip').append('#manager-zip');
    });
};


//*************FUNCTION appUserInput*************** */
// retrieves applicant's input data when submit button is clicked
const appUserInput = function () {

    console.log("addUserInput");

    //Grab the form elements and fill the applicant object
    let applicant = {
        firstName: $('#app-name-first').val().trim(),
        lastName: $('#app-name-last').val().trim(),
        email: $('#app-email').val().trim(),
        phone: $('#app-phone').val().trim(),
        linkedIn: $('#app-linkedIn').val().trim(),
        personalUrl: $('#app-url').val().trim(),
        availability: $('#app-avail').val().trim(),
        zipcode: $('#app-zip').val().trim(),
        salary: $('#app-rate').val().trim(),
        video: $('#app-video').val().trim(),
        jobtitle: $('#app-job-title').val().trim(),
    };

    console.log("applicant", applicant);

    //Clear the input form
    $('#app-name-first').val('');
    $('#app-name-last').val('');
    $('#app-pass').val('');
    $('#app-email').val('');
    $('#app-phone').val('');
    $('#app-linkedIn').val('');
    $('#app-url').val('');
    $('#app-avail').val('');
    $('#app-zip').val('');
    $('#app-rate').val('');
    $('#app-video').val('');
    $('#app-title').val('');

    postApplicant(applicant);
};

const postApplicant = function (data) {

    console.log("postApplicant");

    $.ajax({
        method: 'POST',
        url: ('/api/applicant'),
        data: data
    }).then(function (res) {
        //Just successfully added a new applicant
        //This is where we will redirect them to their login page

    });
};

// gets the form information from the page, clears it and then sends that data
const jobInput = function () {

    e.preventDefault();
    console.log('jobInput');

    let job = {
        position: $('#job-position').val.trim(),
        hourlyRate: $('#job-rate').val.trim(),
        startDate: $('#job-start').val.trim(),
        hours: $('#job-hours').val.trim(),
        zipcode: $('#job-zip').val.trim()
    };

    console.log("job", job);

    //Clear the input form
    $('#job-position').val('');
    $('#job-rate').val('');
    $('#job-start').val('');
    $('#job-hours').val('');
    $('#job-zip').val('');

    postJob(job);
};

const postJob = function (data) {
    console.log("postJob");

    $.ajax({
        method: 'POST',
        url: ('/api/job'),
        data: data
    }).then(function () {
        console.log("POST");
    });
};

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
        $('#manager-input-modal').modal({
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

    //event listeners for manager submitting their new profile
    $('#manager-submit').on('click', function(){
        console.log('It worked!!');
        collectManagerInput();
    });

    $('#app-submit').on('click', appUserInput);

    $('#job-submit').on('click', jobInput);
    
});

});