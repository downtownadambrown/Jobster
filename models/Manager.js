//Model for the mySQL Job database
//Defines the structure (tables) of the database
//Manager is a parent of Job

module.exports = function(sequelize, DataTypes) {
    const Manager = sequelize.define('Manager', {

        //Define fields in Manager model
        //manager_id is defined automatically as id and will be used as a foreign key for Jobs.
        manager_firstName: DataTypes.STRING,
        manager_lastName: DataTypes.STRING,
        manager_email: DataTypes.STRING,
        manager_phone: DataTypes.STRING,
    });

        Manager.associate = function(models) {
            //Associate Manager with Job
            Manager.hasMany(models.Job);
        };
    
        return Manager;
};