//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.

module.exports = function (connection, Sequelize) {
    var Applicant = connection.define('Applicant', {

        //Define field names in table Applicant
        applicant_firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        applicant_lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        applicant_email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        applicant_phone: {
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

    });


    return Applicant;
};