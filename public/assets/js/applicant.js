$(function () {



//*************FUNCTION appUserInput*************** */
// retrieves applicant's input data when submit button is clicked




console.log("addUserInput");


        //Grab the form elements and fill the applicant object
        let applicant = {
            firstName: $('#app-name-first').val().trim(),
            lastName: $('#app-name-last').val().trim(),
            email: $('#app-pass').val().trim(),
            email: $('#app-email').val().trim(),
            phone: $('#app-phone').val().trim(),
            linkedIn: $('#app-linkedIn').val().trim(),
            personalUrl: $('#app-url').val().trim(),
            availability: $('#app-avail').val().trim(),
            zipcode: $('#app-zip').val().trim(),
            salary: $('#app-rate').val().trim(),
            video: $('#app-video').val().trim(),
            jobtitle: $('#app-title').val().trim(),
        };

        console.log ("applicant", applicant);


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
    }).then(function() {
      console.log("POST");
      });
};




        
$('#app-submit').on('click', appUserInput);


});





