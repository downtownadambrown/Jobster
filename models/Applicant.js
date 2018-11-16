//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.
const bcrypt = require('bcryptjs'); 
module.exports = function (connection, Sequelize) {
    var Applicant = connection.define('Applicant', {

        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        //Define field names in table Applicant
        firstName: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        lastName: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        email: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        phone: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        linkedIn: {
            type: Sequelize.STRING,
            // allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        personalUrl: {
            type: Sequelize.STRING,
            // allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        linkedIn: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        personalUrl: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        
        videoUrl: {
            type: Sequelize.STRING,
            // allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        availability: {
            type: Sequelize.DATE ,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        zipcode: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        salary: {
            type: Sequelize.FLOAT,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        

        jobtitle: {
            type: Sequelize.STRING,
            // allowNull: false,
            defaultValue: "undeclared-position",
            validate: {
                notEmpty: true
            }
        }
        
    },

    { // encrypt before creating and saving user to database
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        }   
    });

    return Applicant;
};