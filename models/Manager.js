//Model for the mySQL Job database
//Defines the structure (tables) of the database
//Manager is a parent of Job
var bcrypt = require('bcryptjs');
module.exports = function(connection, Sequelize) {
    const Manager = connection.define('Manager', {

        //Define fields in Manager model
        //manager_id is defined automatically as id and will be used as a foreign key for Jobs.
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
/*
        // "1&2&23..."
        jobs: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
/*
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
                notEmpty: true,
                isEmail: true
            }
        },

        phone: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true,
                // isNumeric: true
            }
        },
        image: {
            type:Sequelize.STRING,
            // allowNull:false,
            defaultValue: "image undefined",
            validate: {
                notEmpty: true
            }
        },

        companyName: {
            type: Sequelize.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        companySite: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        },
        companyLinkedIn: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        companyZipcode: {
            type: Sequelize.STRING,
            // allowNull: true,
            validate: {
                notEmpty: true
            }
        }
        */
    },
    { // encrypt before creating and saving user to database
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        }   
    });

    Manager.associate = function(models) {
        //Associate Manager with Job
        Manager.hasMany(models.Job);
        //Manager.hasMany(models.Message);
    };

    return Manager;
};