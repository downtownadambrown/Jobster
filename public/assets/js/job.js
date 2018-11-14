$(function (){   
    //*************FUNCTION managerInput*************** */
    // retrieves manager's input data when submit button is clicked
    const collectJobInput = function () {
        //Takes in the data from the managers form and clears form after submit.
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the manager can hit enter instead of clicking the button if they want
        console.log("collectJobInput");
        //Grab the form elements and fill the applicant object
        let job = {
            position: $('#job-title').val().trim(),
            hourlyRate: $('#job-rate').val().trim(),
            hours: $('#job-hours').val().trim(),
            startDate: $('#job-start').val().trim(),
            zipcode: $('#job-zip').val().trim()
        };
        console.log("job", job);
        //Clear the input form
        $('#job-title').val('');
        $('#job-rate').val('');
        $('#job-hours').val('');
        $('#job-start').val('');
        $('#job-zip').val('');
    
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
            //   window.location.replace("/manager-profile");
            
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
            $('#image-manager').append('#manager-image');
            $('#company').append('#manager-company');
            $('#linkedIn').append('#manager-linkedIn');
            $('#companyUrl').append('#manager-url');
            $('#zip').append('#manager-zip');
      
      
      //event listeners for manager submitting their new profile
    $('#manager-submit').on('click', function(){
        console.log('It worked!!');
        collectManagerInput();
      });
        });