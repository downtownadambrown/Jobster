const Routes = require("./RoutesClass");
const models = require("../models");
const jwt = require('jsonwebtoken');

module.exports = function(app) {

    // All routes starting with below route will be authentificated, and decoded id passed to next function call
    app.use("/api/auth", function(req, res, next) {
        const token = req.headers["x-access-token"];
        try {
            if (token) {
                jwt.verify(token, app.get('secretKey'), function(err, decoded) { 
                    if (err) {
                        throw err.message;
                    } else {
                        req.body.userId = decoded.id;
                        next();
                    }
                });
            } else {
                throw "No token provided";
            }
        } catch(err) {
            res.json({status: "error", message: err});
        }
    });
    
    // Call routes
    const applicant = new Routes("applicant", app, models.Applicant);
    applicant.findAll();
    applicant.findList();
    applicant.findID("id");
    applicant.authenticate();
    applicant.create();
    applicant.delete("id");
    applicant.update("id");

    const manager = new Routes("manager", app, models.Manager);
    manager.findAll();
    manager.findList();
    manager.findID("id");
    manager.authenticate();
    manager.create();
    manager.delete("id");
    manager.update("id");

    const job = new Routes("job", app, models.Job);
    job.findAll();
    job.findList();
    job.findID("id");
    job.create();
    job.delete("id");
    job.update("id");
    //const message = new Routes("message", app, models.Message);
};

