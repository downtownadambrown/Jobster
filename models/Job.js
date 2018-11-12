//Model for the mySQL Products database
//Defines the structure (tables) of the database
//Product is a child of Department.

module.exports = function(connection, Sequelize) {
    var Job = connection.define('Job', {

        //Define field names in table Job
        position: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },

        hourlyRate: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        hours: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        
        startDate: {
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
        }   

             

    });

    
Job.associate = function(models) {
    //Job is a child of Manager, the tables are connected by id (Manager id)
    Job.belongsTo(models.Manager, {
        foreignKey: {
            allowNull: false
        },
        //Commented out for now.
        //Will delete all products in a department if the department is deleted.
        //onDelete: 'cascade'
    });
};
    return Job;
};