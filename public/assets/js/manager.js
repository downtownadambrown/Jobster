
//*************FUNCTION managerInput*************** */
// retrieves manager's input data when submit button is clicked
const collectManagerInput = function (e) {
    //Takes in the data from the managers form and clears form after submit.
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the manager can hit enter instead of clicking the button if they want
    e.preventDefault();
    console.log("managerInput");
    //Grab the form elements and fill the applicant object
    let manager = {
        firstName: $('#manager-name-first').val().trim(),
        lastName: $('#manager-name-last').val().trim(),
        email: $('#manager-email').val().trim(),
        phone: $('#manager-phone').val().trim(),
        password: $('#managerPw').val().trim(),
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
    $('#managerPw').val('');
    $('#manager-company').val('');
    $('#manager-url').val('');
    $('#manager-linkedIn').val('');
    $('#manager-zip').val('');

    postManager(manager);
};

const postManager = function (data) {
    console.log("postManager");

    $.ajax({
        method: 'POST',
        url: ('/api/manager'),
        data: data
    }).then(function (res) {
        console.log("POST");
        console.log('resp:', res);
        Window.location.replace("/manager-profile");
    });
};
