$(function () {

    //CONSOLE LOG STILL PRESENT FOR FINAL TESTING

    //Grab the applicants that match the job requirements
    //TEMPORARY just grab the applicants
    const matchingQuery = function (jobData) {
        console.log("matchingQuery");

        $.get('/api/applicant')
            // $.get('/api/applicant/match')
            .then(function (appMatches) {
                console.log("Query matching data", appMatches);


                dataReady(appMatches);

            });
    };


    //Now that we have the applicant data, we can work with it.
    //appMatches is all of the applicants that are qualified for the job
    const dataReady = function (appMatches) {



        //Display chosen applicants to the User +
        //Scroll back and forward + remove/ favorite applicant.
        //appMatches is all of the applicants that are qualified for the job
        //i is the index of appMatches data
        const displayApplicants = function (appMatches, i) {

            console.log("displayApplicants", appMatches, i);
            console.log("index, appMatches.length", index, appMatches.length);

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
            // TODO - some are not needed.
            newApplicant.attr('app-id', i);
            yesApplicant.attr('appYes-id', i);
            noApplicant.attr('appNo-id', i);
            forApplicant.attr('appFor-id', i);
            backApplicant.attr('appBack-id', i);

            //Add text to diplay on button
            yesApplicant.text('Keep');
            noApplicant.text('Toss');
            // forApplicant.text(`${i}  ${appMatches[i].id} for ${appMatches[i].firstName}`);
            // backApplicant.text(`${i}  ${appMatches[i].id} back ${appMatches[i].firstName}`);
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
                console.log("favArray.indexOf(appMatches[i].id", favArray.indexOf(appMatches[i].id));
                if (favArray.indexOf(appMatches[i].id) != -1) {
                    console.log("no heart");
                    $('#app-heart').append(heartApplicant); //Display heart
                };
            };
        };



        //Manager can choose to discard an applicant
        const noApplicant = function (event) {
            event.preventDefault();

            console.log("NoApplicant");
            console.log("appMatches before", appMatches);

            //Capture the index of the applicant to remove.
            const appNoId = ($(this).find("button").attr("appNo-id"));
            //Collect removed applicants and remove from appMatches.
            removed.push(appMatches.splice(appNoId, 1));
            // remArray.push(removed.Array[appNoId].id);
            remArray.push(appMatches[appNoId].id);


            console.log("appNoId, index", appNoId, index);
            console.log("removed", removed);
            console.log("remArray", remArray);
            console.log("appMatches after", appMatches);

            //Render applicants
            displayApplicants(appMatches, index);           

        };

        //Manager can choose to favorite an applicant
        const yesApplicant = function (event) {
            event.preventDefault();

            console.log("yesApplicant");
            console.log("appMatches before", appMatches);

            //Capture the index of the applicant to favorite.
            const appYesId = ($(this).find("button").attr("appYes-id"));
            //Collect favorite applicants.
            favorite.push(appMatches[appYesId]);
            favArray.push(appMatches[appYesId].id);


            console.log("appYesId, index", appYesId, index);
            console.log("favorite", favorite);
            console.log("favArray", favArray);
            console.log("appMatches after", appMatches);

            //Render applicants
            displayApplicants(appMatches, index);

        };



        //User can scroll back and forward through applicants
        const scrollBack = function (event) {
            event.preventDefault();
            console.log("scrollBack");
            index = index - 1;

                if (index < 0) {
                    console.log("reset left");
                    index = appMatches.length-1;
                    console.log("index", index);
                };
            

            //Render applicants
            displayApplicants(appMatches, index);

        };

        const scrollForward = function (event) {
            event.preventDefault();
            console.log("scrollForward");
            index = index + 1;

            //Wrap around carousel scroll
            if (index === (appMatches.length)) {
                console.log("reset");
                console.log("index", index)
                index = 0;
            };
            

            //Render applicants
            displayApplicants(appMatches, index);
        };

       
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
