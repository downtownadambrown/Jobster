module.exports = function (sequelize, DataTypes) {
    var Message = sequelize.define('Message', {
        message: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        //names of sending and received
        sent: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        received: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    // keep track of who are communicating
    Message.associate = function (models) {
        Message.belongsToMany(models.Manager, {
            through: "ManagerApplicant"
        
        });
        Message.belongsToMany(models.Applicant, {
            through: "ManagerApplicant"
        });
    };

    return Message;
};