class Routes {
    constructor(resource, app, model) {
        this.resource = resource;
        this.app = app;
        this.model = model;
    }

//Public methods-----------------------------------------------------------

    // Get All for applicants, manager, jobs
    findAll() {
        this.app.get(`/api/${this.resource}`, (req, res) => {
            this.model.findAll({})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

    // this will only find one person/job/manager
    // always uses id
    findID(identifier) {
        this.app.get(`/api/${this.resource}/:${identifier}`, (req, res) => {
           this.model.findAll({
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

    // Search by a specific applicant or manager name, with first name and last name
    // Not for job, unless the job's got a first and last names...
    //-----update to check the uppercase lowercase
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

    // Create method for applicants, manager, jobs data
    // note: create JWT credential lata
    create() {
        this.app.post(`/api/${this.resource}`, (req, res) => {
            this.model.create(req.body)
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    }

    //Match method for matching applicants with jobs
    match(identifier, title) {
        // this.app.get(`/api/${this.resource}/:${identifier}`, (req, res) => {
        this.app.get(`/api/applicant/match`, (req, res) => {    
           this.model.findAll({
            // where: {
            //     jobtitle: "Waiter",
            //   }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err){
                res.json(err);
            })
        })
    };



//Private methods-----------------------------------------------------------

    //This section is for secure transmission of personal data, such as messages
    //These methods need the caller's data
    // note: need to update with JWT
    // note: favorites using cookie frontend or maybe just database storage?

    

    // always delete by ID matching
    delete(identifier) {
        this.app.delete(`/api/${this.resource}/:${identifier}`, (req, res) => {
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

    // always update by ID matching
    update(identifier) {
        this.app.put(`/api/${this.resource}/:${identifier}`, (req, res) => {
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
}





module.exports = Routes;