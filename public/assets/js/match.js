$(function () {

    //FUNCTIONS

    //Grab the applicants that match the job requirements
        const matchingQuery = function (jobData) {
        console.log("matchingQuery");

        $.get('/api/findall/applicant')
            // $.get('/api/applicant/match')
            .then(function (appMatches) {
                console.log("Query matching data", appMatches);


                dataReady(appMatches);

            });
    };


    //Now that we have the applicant data:
    //appMatches is all of the applicants that are qualified for the job
    const dataReady = function (appMatches) {


        //Display chosen applicants to the User +
        //Scroll back and forward + remove/ favorite applicant.
        //appMatches is all of the applicants that are qualified for the job
        //i is the index of appMatches data
        const displayApplicants = function (appMatches, i) {

            //Clear applicant data from display
            $('#app-image').empty();
            $('#app-name').empty();
            $('#app-forward').empty();
            $('#app-backward').empty();
            $('#app-no').empty();
            $('#app-yes').empty();
            $('#app-heart').empty();

            //Create HTML holders
            const newApplicant = $('<img>').attr("src", `${appMatches[i].videoUrl}`)
            const nameApplicant = $('<p></p>');
            const yesApplicant = $('<button>');
            const noApplicant = $('<button>');
            const forApplicant = $('<p>&#10095;</p>');
            const backApplicant = $('<p>&#10094;</p>');
            const heartApplicant = $('<h3>&#10084;</h3>'); //Favorite indication

            // Add a data-attributes to attach to selectors
            newApplicant.attr('app-id', i);
            yesApplicant.attr('appYes-id', i);
            noApplicant.attr('appNo-id', i);
            forApplicant.attr('appFor-id', i);
            backApplicant.attr('appBack-id', i);

            //Add text to diplay elements
            yesApplicant.text('Keep');
            noApplicant.text('Toss');            
            nameApplicant.text(`${appMatches[i].firstName} ${appMatches[i].lastName}`);

            //Display to the User       
            $('#app-image').append(newApplicant);
            $('#app-forward').append(forApplicant);
            $('#app-backward').append(backApplicant);
            $('#app-no').append(noApplicant);
            $('#app-yes').append(yesApplicant);
            $('#app-name').append(nameApplicant);
            


            //Display favorite heart if id is found in favorites array
            for (let j = 0; j < favArray.length; j++) {                
                if (favArray.indexOf(appMatches[i].id) != -1) {                    
                    $('#app-heart').append(heartApplicant); //Display heart
                };
            };
        };



        //Manager can choose to discard an applicant
        const noApplicant = function (event) {
            event.preventDefault();            

            //Capture the index of the applicant to remove.
            const appNoId = ($(this).find("button").attr("appNo-id"));
            //Collect removed applicants and remove from appMatches.
            removed.push(appMatches.splice(appNoId, 1));
            // remArray.push(removed.Array[appNoId].id);
            remArray.push(appMatches[appNoId].id);
            
            //Render applicants
            displayApplicants(appMatches, index);
        };

        //Manager can choose to favorite an applicant
        const yesApplicant = function (event) {
            event.preventDefault();

            //Capture the index of the applicant to favorite.
            const appYesId = ($(this).find("button").attr("appYes-id"));
            //Collect favorite applicants.
            favorite.push(appMatches[appYesId]);
            favArray.push(appMatches[appYesId].id);

            //Render applicants
            displayApplicants(appMatches, index);
        };



        //User can scroll back through applicants
        const scrollBack = function (event) {
            event.preventDefault();            
            index = index - 1;

                if (index < 0) {                    
                    index = appMatches.length-1;                    
                };            

            //Render applicants
            displayApplicants(appMatches, index);
        };

        //User can scroll forward through applicants
        const scrollForward = function (event) {
            event.preventDefault();            
            index = index + 1;

            //Wrap around carousel scroll
            if (index === (appMatches.length)) {                
                index = 0;
            };            

            //Render applicants
            displayApplicants(appMatches, index);
        };


        //Render the applicants carousel
        displayApplicants(appMatches, 0);

        //On click call scroll and remove/favorite.
        $('#app-no').on('click', noApplicant);
        $('#app-yes').on('click', yesApplicant);
        $('#app-forward').on('click', scrollForward);
        $('#app-backward').on('click', scrollBack);


    }; //End dataReady

    var index = 0;
    var appMatches = [];
    var removed = [];
    var favorite = [];
    var remArray = [];
    var favArray = [];

    //Collect qualified applicants for each job.
    matchingQuery();

});
