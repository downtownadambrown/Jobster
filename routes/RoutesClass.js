const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

// Simply used to 
const routeString = function() {

}


class Routes {
    constructor(resource, app, model) {
        this.resource = resource;
        this.app = app;
        this.model = model;
    }

    // This will send all info for all IDs requested, with the exception of passwords in case of appplicant and manager
    findAll() {
        this.app.get(`/api/findall/${this.resource}`, (req, res) => {
            this.model.findAll({ 
                attributes: { exclude: ['password'] } 
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            });
        });
    }

    // This will send all info for all IDs requested, with the exception of passwords in case of appplicant and manager
    // Expected req input is a string, such as "1&2&23", to find id 1, 2, and 23.
    // req.body.list is the expected input format for the string.
    // IDs that don't exist are not returned.
    findArr() {
        this.app.get(`/api/find/${this.resource}`, (req, res) => {
            const arr = req.body.list.split("&");
            this.model.findAll({ 
                where: { id: arr },
                attributes: { exclude: ['password'] } 
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            });
        });
    }

    // This will send all info pertaining to the ID, with the exception of passwords in case of appplicant and manager
    findID(id) {
        this.app.get(`/api/find/${this.resource}/:${id}`, (req, res) => {
            this.model.findOne({
                where: {
                    [id]: req.params[id]
                },
                attributes: { exclude: ['password'] }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

    // Create applicant/manager or job
    create() {
        this.app.post(`/api/create/${this.resource}`, (req, res) => {
            const modelRef = this.model;
            let where;
                if (this.resource === "job") {
                    where = {where: {title: req.body.title}};
                } else {
                    where = {where: {username: req.body.username}};
                }
            modelRef.findAll(where)
            .then(function(data) {
                if (data.length === 0) {
                    modelRef.create(req.body)
                    .then(function(data) {
                        res.json(data);
                    })
                    .catch(function(err) {
                        res.json({status: "error", message: "Bad request format"});
                    });
                } else {
                    throw "Username or job title already exists";
                }
            })
            .catch(function(err) {
                res.json({status: "error", message: err});
            });
        });
    }

    // Called to authenticate during login.
    // This will only ever be called for applicant and manager to authenticate.
    // When provided request with username and password, send back response object with access token for 1hr.
    authenticate() {
        const appRef = this.app;
        appRef.post(`/api/authenticate/${this.resource}`, (req, res) => {
            this.model.findOne({where: {username: req.body.username} })
            .then(function(data) {
                if (!data) {
                    throw "No such user or bad request format"
                } else if (bcrypt.compareSync(req.body.password, data.password)) {
                    const token = jwt.sign({id: data.id}, appRef.get("secretKey"), { expiresIn: "1h" });
                    res.json({status: "success", message: "Logged in", data: {username: data.username, token: token}});                   
                } else {
                    throw "Wrong password";
                }
            })
            .catch(function(err) {
                res.json({status: "error", message: err});
            });
        });
    }


//--------Authentification required methods---------
// User's is automatically passed already from the verification part from api-routes.js, as req.body.userId
    
    // To delete personal info or jobs listed, need to check if the info/job is owned by the applicant/manager
    delete() {
        this.app.delete(`/api/auth/${this.resource}`, (req, res) => {
            this.model.destroy({
                where: {
                    [identifier]: req.params[identifier]
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

    update() {
        this.app.put(`/api/auth/${this.resource}`, (req, res) => {
            this.model.update(
                req.body,
                {
                where: {
                    [identifier]: req.params[identifier]
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

/* Might not need

    findName() {
        this.app.get(`/api/${this.resource}/firstName=:firstName&lastName=:lastName`, (req, res) => {
            this.model.findAll({
                where: {
                    firstName: req.params.firstName,
                    lastName: req.params.lastName
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

    // look for messages sent by the caller
    findSentMessage(ID) {
        
    }

    // look for messages received to caller
    findReceievedMessage(ID) {
    
    }

    //post message to database, setting the caller's id as sent and target's id as received
    sendMessage() {
        this.app.post(`/api/message`, (req, res) => {
            this.model.create(req.body)
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }
*/
}

module.exports = Routes;