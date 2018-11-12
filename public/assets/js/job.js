$(function() {
// gets the form information from the page, clears it and then sends that data
    const jobInput = function() {

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
                    method:'POST',
                    url: ('/api/job'),
                    data: data
                }).then(function() {
                    console.log("POST");
                });
            };

            $('#job-submit').on('click', jobInput);
        });