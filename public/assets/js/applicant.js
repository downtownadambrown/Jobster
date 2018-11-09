//*************FUNCTION appUserInput*************** */
// retrieves applicant's input data when submint button is clicked

const appUserInput = function (event) {
        //Takes in the data from the applicant form and clears form after submit.

        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        console.log("addUserInput");

//Temporary Dummy Data
let applicant = {
    firstName: "Patricia",
    lastName: "Rutabega",
    email: "PRutabega@email.com",
    phone: "555-666-7777",
    linkedIn: "yada yada yada",
    personalUrl: "asklfjldkfjldfsk",
    availability: 05/12/2018,
    zipcode: 30044,
    salary: 20000,
    video: "ksdfjlsdkfjsdflurl",
    jobtitle: "waiter"
};

console.log("addUserInput");


        // //Grab the form elements and fill the applicant object
        // let applicant = {
        //     firstName: $('#app-name-first').val().trim(),
        //     lastName: $('#app-name-last').val().trim(),
        //     email: $('#app-email').val().trim(),
        //     phone: $('#app-phone').val().trim(),
        //     linkedIn: $('#app-linkedIn').val().trim(),
        //     personalUrl: $('#app-url').val().trim(),
        //     availability: $('#app-avail').val().trim(),
        //     zipcode: $('#app-zip').val().trim(),
        //     salary: $('#app-salary').val().trim(),
        //     video: $('#app-video').val().trim(),
        //     jobtitle: $('#app-title').val().trim(),
        // };

        console.log ("applicant", applicant);


        //Clear the input form
            $('#app-name-first').val('');
            $('#app-name-last').val('');
            $('#app-email').val('');
            $('#app-phone').val('');
            $('#app-linkedIn').val('');
            $('#app-url').val('');
            $('#app-avail').val('');
            $('#app-zip').val('');
            $('#app-salary').val('');
            $('#app-video').val('');
            $('#app-title').val('');

};

        

appUserInput();