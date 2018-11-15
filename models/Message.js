module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define('Message', {
        message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        //names of sending and received
        sent: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        received: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        }
    });

    // keep track of who are communicating
    Message.associate = function(models) {
        Message.belongsTo(models.Manager, {
            foreignKey: {
                allowNull: false
            }
        });
        Message.belongsTo(models.Applicant, {
            foreignKey: {
                allowNull: false
            }    
        });
    };

    return Message;
};