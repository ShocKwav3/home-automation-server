'use strict';

import hub from './hub';
import category from './category';


module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('device', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter device name',
      },
    },
    hub_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify user id',
      },
      references: {
        model: hub,
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter category id (motor/moisture sensor)',
      },
      references: {
        model: category,
        key: 'id',
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
    device.hasMany(models.device_data, {
      foreignKey: 'device_id',
      as: 'device_data',
    });
    device.belongsTo(models.hub, {
      foreignKey: 'hub_id',
      as: 'hub',
    });
    device.belongsTo(models.category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  };

  return device;
};
