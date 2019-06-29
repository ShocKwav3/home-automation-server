'use strict';
module.exports = (sequelize, DataTypes) => {
  const sensor_data = sequelize.define('sensor_data', {
    sensor_device_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'devices',
        key: 'id',
        as: 'sensor_device_id',
      },
    },
    created_timestamp: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'Timestamp missing - created_timestamp (sensor_data)',
      },
    },
    sensor_value: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Value missing - sensor_value',
      },
    },
  }, {
    timestamps: false,
  });

  sensor_data.associate = function(models) {
    sensor_data.belongsTo(models.device, {
      foreignKey: 'sensor_device_id',
      onDelete: 'CASCADE',
    });
  };

  return sensor_data;
};