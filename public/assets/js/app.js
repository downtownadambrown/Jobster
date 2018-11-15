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
//*************FUNCTION appUserInput*************** */
// retrieves applicant's input data when submit button is clicked
const appUserInput = function () {

    console.log("appUserInput");

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
    console.log("Data:", data);

    $.ajax({
        method: 'POST',
        url: ('/api/applicant'),
        data: data
    }).then(function (res) {
        console.log("Res:", res);
        //Just successfully added a new applicant
        //This is where we will redirect them to their login page
localStorage.setItem("loggedIn", true);
localStorage.setItem("userId", res.id);
window.location.replace("/app-profile");
    });
};

// added the data from user onto the page div properties
function populateJobInfo (job){
    
    $('#manager-job-position').text(job.position);
    $('#manager-job-rate').text(job.hourlyRate);
    $('#manager-job-start').text(job.startDate);
    $('#manager-job-hours').text(job.hours);
    $('#manager-job-zip').text(job.zipcode);
}

// gets the form information from the page, clears it and then sends that data
const collectJobInput = function () {

    
    console.log('jobInput');

    let job = {

        position: $('#job-position').val(),
        hourlyRate: $('#job-rate').val(),
        startDate: new Date( $('#job-start').val()),
        hours: $('#job-hours').val(),
        zipcode: $('#job-zip').val()
    };

    console.log("--------------job-------------", job);

    //Clear the input form
    $('#job-position').val('');
    $('#job-rate').val('');
    $('#job-start').val('');
    $('#job-hours').val('');
    $('#job-zip').val('');

    populateJobInfo(job);

    postJob(job);
};

const postJob = function (data) {
    console.log("postJob");
    console.log("In POST JOB", data);

    $.ajax({
        method: 'POST',
        url: ('/api/job'),
        data: data
    }).then(function (response) {
        console.log(response, "This is our response from job post");
        localStorage.setItem("loggedIn", true);
       // localStorage.setItem("userId", res.id);
      //  window.location.replace("/manager-profile");
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
        console.log('Manager data recieved!!');
        collectManagerInput();
    });

    //event listener for applicant submitting their new profile
    $('#app-submit').on('click', function() {
        console.log('Applicant data recieved');
        appUserInput();
    });


    //event listener for a new job being posted
    $('#job-submit').on('click', function(event) {
       console.log('In job submit');
       event.preventDefault();
     collectJobInput(); 
    });
    
    
});
// Posting a photo to the profile page- both the manager and applicant
function previewFile(){
    const preview = document.querySelector('img'); //selects the query named img
    const file    = document.querySelector('input[type=file]').files[0]; //sames as here
    const reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

previewFile();  //calls the function named previewFile()
});
