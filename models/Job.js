//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.

module.exports = function(connection, Sequelize) {
    var Job = connection.define('Job', {

        //Define field names in table Job
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
/*
        companyName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        compensationLow: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        compensationHigh: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        responsibilities1: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        responsibilities2: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        responsibilities3: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },


        hours: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        logo_url: {
            type: Sequelize.STRING,
            allowNull: true,
            // validate: {
            //     notEmpty:true
            // }
        },

        
        keyword1: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        keyword2: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        keyword3: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        website: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                notEmpty:true
            }
        },

        startDate: {
            type: Sequelize.DATE,
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
        }   

             
*/
    });


    Job.associate = function(models) {
        //Job is a child of Manager, the tables are connected by id (Manager id)
        Job.belongsTo(models.Manager, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    };

    return Job;
};