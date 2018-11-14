// This file is for the manager profile page- Populating the data onto the screen
//DO NOT DELETE THIS PAGE


(function ($) {
    const jobId = localStorage.getItem("userId");
    $.get(`/api/job/${jobId}`)
        .then(function (data) {
            const job = data[0];

            console.log("data inside get /api/job promise", data);

            //Append the information to the page

            $('#manager-job-position').text(job.position);
            $('#manager-job-rate').text(job.hourlyRate);
            $('#manager-job-start').text(job.startDate);
            $('#manager-job-hours').text(job.hours);
            $('#manager-job-zip').text(job.zipcode);
        });
})(jQuery);