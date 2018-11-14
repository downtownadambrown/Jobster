(function ($) {
    const managerId = localStorage.getItem("userId");
    $.get(`/api/manager/${managerId}`)
        .then(function (data) {
            const manager = data[0];

            console.log("data inside get /api/manager promise", data);

            //Append the information to the page
            // $('#manager-first-name').append('Manager');

            $('#first-name').text(manager.firstName);
            $('#last-name').text(manager.lastName);
            $('#email').text(manger.email);
            $('#phone').text(manager.phone);
            $('#manager-image').text(manager.image);
            $('#company').text(manager.companyName);
            $('#linkedIn').text(manager.companyLinkedIn);
            $('#companyUrl').text(manager.companySite);
            $('#zip').text(manager.companyZipcode);
        });
})(jQuery);