$(function() {
// gets the form information from the page, clears it and then sends that data
    const validateForm = function() {
        let isValid = true;

        //we ask jquery for a nodelist of inputs,
        // we iterate over nodelist of inputs,
        //then evaluate if input.val is...
        $('input').each(function() {
            if($(this).val() === '') {
                isValid = false;
            }
        });
        return isValid;
    }
    // grabbing manager input data when submit button is clicked
    const managerJobInput = function (e) {

       // Takes in the data from the applicant form and clears form after submit.

        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want

        e.preventDefault();
        if(validateForm()) {
            const managerInput = {
                companyTitle: $('#comp-title').val.trim(),
                companyName: $('#comp-name').val.trim(),
                companyEmail: $('#comp-email').val.trim(),
                companyComp: $('#comp-comp').val.trim(),
                companyDuties: $('#comp-duties').val.trim(),
                companyHours: $('#comp-hours').val.trim(),
                companyWebsite: $('#comp-site').val.trim(),
                companyStartDate: $('#comp-start').val.trim(),
                companyZipcode: $('#comp-zip').val.trim()
            };

            console.log("mangerInput", managerInput);

            //Clear the input form
            $('#comp-title').val(''),
            $('#comp-name').val(''),
            $('#comp-email').val(''),
            $('#comp-comp').val(''),
            $('#comp-duties').val(''),
            $('#comp-hours').val(''),
            $('#comp-site').val(''),
            $('#comp-start').val(''),
            $('#app-zip').val('')

            });

            
            //sending the data in a post request
            $.post('/api/company', managerInput, function(data) {

                // grab results from the post 
        }
    }

    $('#submit').on('click', managerJobInput);
});


 