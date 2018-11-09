//Model for the mySQL Job database
//Defines the structure (tables) of the database
//Manager is a parent of Job

module.exports = function(sequelize, DataTypes) {
    const Manager = sequelize.define('Manager', {

        //Define fields in Manager model
        //manager_id is defined automatically as id and will be used as a foreign key for Jobs.
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
        /*,
        manager_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        manager_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
        */
    });

    Manager.associate = function(models) {
        //Associate Manager with Job
        Manager.hasMany(models.Job);
        Manager.hasMany(models.Message);
    };

    return Manager;
};