// Dependencies----------------
//Include the path package to get the correct file path for our html
//=========================================================

const path = require('path');


// Routing
//==================================
module.exports = function(app) {

    //HTML GET requests
    // Below code handles when users 'visit a page
    //In each of the below cases the user is shown an HTML page of content
app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname, '../public/index.html'));
   
});
// all other files *
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
           
});


// Other html route if we add new page
};
