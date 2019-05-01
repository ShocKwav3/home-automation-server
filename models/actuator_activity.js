'use strict';
module.exports = (sequelize, DataTypes) => {
  const actuator_activity = sequelize.define('actuator_activity', {
    created_timestamp: {
      type: DataTypes.DATE,
      unique: {
        args: true,
      },
      allowNull: {
        args: false,
        msg: 'Timestamp missing - activity_time',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Activity name missing',
      },
    },
    actuator_device_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'devices',
        key: 'id',
        as: 'actuator_device_id'
      },
    },
    sensor_device_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'devices',
        key: 'id',
        as: 'sensor_device_id'
      },
    },
  }, {
    timestamps: false,
  });

  actuator_activity.associate = function(models) {
    actuator_activity.belongsTo(models.device, {
      foreignKey: 'actuator_device_id',
      onDelete: 'CASCADE',
    });
    actuator_activity.belongsTo(models.device, {
      foreignKey: 'sensor_device_id',
      onDelete: 'CASCADE',
    });
  };

  return actuator_activity;
};