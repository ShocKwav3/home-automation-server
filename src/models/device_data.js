'use strict';


import device from './device';


module.exports = (sequelize, DataTypes) => {
  const device_data = sequelize.define('device_data', {
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
    device_id: {
      type: DataTypes.INTEGER,
      references: {
        model: device,
        key: 'id',
      },
    },
    device_value: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Device value missing',
      },
    },
    initiator_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Initiator id missing',
      },
    },
  }, {
    timestamps: false,
  });

  device_data.associate = function(models) {
    device_data.belongsTo(models.device, {
      foreignKey: 'device_id',
      onDelete: 'CASCADE',
    });
  };

  return device_data;
}
