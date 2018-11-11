// $(function () {


const getApplicants = function () {
    
    console.log("getApplicants");

    // Make a GET request to /api/products/Id:
    $.get('/api/applicant/')
    .then(function (data) {
    console.log("data", data);
   
    });

    
};

// const getJobs = function () {
    
//     console.log("getJobs");

//     // Make a GET request to /api/products/Id:
//     $.get('/api/applicant/')
//     .then(function (data) {
//     console.log("data", data);
   
//     });

    
// };



getApplicants();

// });
