const Routes = require("./RoutesClass");
const models = require("../models");

module.exports = function(app) {
    const applicant = new Routes("applicant", app, models.Applicant);
    applicant.findAll();
    applicant.findID("id");
    applicant.findName();
    applicant.create();
    applicant.delete("id");
    applicant.update("id");

    const job = new Routes("job", app, models.Job);
    job.findAll();
    job.findID("id");
    job.create();
    job.delete("id");
    job.update("id");

    const manager = new Routes("manager", app, models.Manager);
    manager.findAll();
    manager.findID("id");
    manager.findName();
    manager.create();
    manager.delete("id");
    manager.update("id");

    const message = new Routes("message", app, models.Message);

    
};

