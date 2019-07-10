'use strict';
module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('device', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter device name',
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please specify role (actuator/sensor)',
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter type (motor/moisture sensor)',
      },
    },
    io_pin: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please specify connected io pin',
      },
      unique: {
        args: true,
        msg: 'Pin is already in use',
      },
    },
    added_timestamp: {
      type: DataTypes.DATE,
      allowNull: {
        args: true,
      },
    },
    updated_timestamp: {
      type: DataTypes.DATE,
      allowNull: {
        args: true,
      },
    },
    min_value: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify minimum value',
      },
    },
    max_value: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify minimum value',
      },
    },
  }, {
    timestamps: false
  });

  device.associate = function(models) {
    device.hasMany(models.actuator_activity, {
      foreignKey: 'actuator_device_id',
      as: 'actuator_activities',
    });
    device.hasMany(models.actuator_activity, {
      foreignKey: 'sensor_device_id',
    });
    device.hasMany(models.sensor_data, {
      foreignKey: 'sensor_device_id',
      as: 'sensor_data',
    });
  };

  return device;
};
