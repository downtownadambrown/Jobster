//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.

module.exports = function(connection, Sequelize) {
    var Applicant = connection.define('Applicant', {

        //Define field names in table Applicant
        applicant_firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        applicant_lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
       

        applicant_email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        applicant_phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        image_url: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        videoUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        }, 

        resume: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        // keywords: {
        //     type: Sequelize.ARRAY,
        //     allowNull: true,
        //     validate: {
        //         notEmpty:true
        //     }
        // },

        // recentEmployment: {
        //     type: Sequelize.ARRAY,
        //     allowNull: true,
        //     validate: {
        //         notEmpty:true
        //     }
        // },

        linkedIn: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        personalUrl: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        availability: {
            type: Sequelize.DATEONLY,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        zipcode: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },   

        // jobDesired: {
        //     type: Sequelize.ARRAY,
        //     allowNull: false,
        //     validate: {
        //         notEmpty:true
        //     }
        // },  

        salary: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }

        

    });

    
// Product.associate = function(models) {
//     //Product is a child of Department, the tables are connected by id (Department id)
//     Product.belongsTo(models.Department, {
//         foreignKey: {
//             allowNull: false
//         },
//         //Commented out for now.
//         //Will delete all products in a department if the department is deleted.
//         //onDelete: 'cascade'
//     });
// };
    return Applicant;
};