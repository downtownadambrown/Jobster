const addApplicants = function () {

    // running the updateapplicant func
    $.get(`/api/applicants/${id}`).then(updateApplicant);
}
const updateApplicants = function (data) {
    const applicantPaired = $(`#${data.id}`).val();

    //if else to pull up paired applicants
    
}

