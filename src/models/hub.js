'use strict';

import user from './user';


module.exports = (sequelize, DataTypes) => {
  const hub = sequelize.define('hub', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter hub name',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify user id',
      },
      references: {
        model: user,
        key: 'id',
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
  }, {
    timestamps: false
  });

  hub.associate = function(models) {
    hub.hasMany(models.device, {
      foreignKey: 'id',
    });
    hub.belongsTo(models.user, {
      foreignKey: 'user_id',
    });
  };

  return hub;
};
