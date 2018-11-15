// This file is for the manager profile page- Populating the data onto the screen
//DO NOT DELETE THIS PAGE


(function ($) {
    const applicantId = localStorage.getItem("userId");
    $.get(`/api/applicant/${applicantId}`)
        .then(function (data) {
            const applicant = data[0];

            console.log("data inside get /api/applicant promise", data);

            //Append the information to the page
            

            $('#first-name').text(applicant.firstName);
            $('#last-name').text(applicant.lastName);
            $('#email').text(applicant.email);
            $('#phone').text(applicant.phone);
            $('#zip').text(applicant.zipcode);
            $('#linkedIn').text(applicant.linkedIn);
            $('#personalUrl').text(applicant.personalUrl);
            $('#availability').text(applicant.availability);
            $('#salary').text(applicant.salary);
            $('#position').text(applicant.jobtitle);

        });
})(jQuery);



