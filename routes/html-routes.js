// Dependencies----------------
//Include the path package to get the correct file path for our html
//=========================================================

const path = require('path');


// Routing
//==================================
module.exports = function (app) {

    //HTML GET requests
    // Below code handles when users 'visit a page
    //In each of the below cases the user is shown an HTML page of content
    app.get('/', function (req, res) {
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/manager-profile', function (req, res) {
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/manager-profile.html'));
    });

    app.get('/app-profile', function (req, res) {
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/app-profile.html'));
    });

    app.get('/assets/js/app.js', function (req, res) {
        res.set('Content-Type', 'application/javascript; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/js/app.js'));
    });

    app.get('/assets/css/style.css', function (req, res) {
        res.set('Content-Type', 'text/css; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/assets/css/style.css'));
    });

    // all other files *
    app.get('*', function (req, res) {
        res.set('Content-Type', 'text/html; charset=utf-8');
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // Other html route if we add new page
};

