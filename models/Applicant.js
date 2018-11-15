//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.
var bcrypt = require('bcryptjs');
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
/*
    Applicant.associate = function(models) {
        Applicant.hasMany(models.Message);
    };
*/
    return Applicant;
};


/*
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        linkedIn: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        personalUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        linkedIn: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        personalUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        availability: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        zipcode: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        salary: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        videoUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        jobtitle: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
        */