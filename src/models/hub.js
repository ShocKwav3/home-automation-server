'use strict';


import user from './user';
import board from './board';
import hub_profile from './hub_profile';


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
    board_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify board id',
      },
      references: {
        model: board,
        key: 'id',
      },
    },
    hub_profile_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify hub profile id',
      },
      references: {
        model: hub_profile,
        key: 'id',
      },
    },
    hub_profile_settings: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter hub profile settings',
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
    hub.belongsTo(models.board, {
      foreignKey: 'board_id',
    });
    hub.belongsTo(models.hub_profile, {
      foreignKey: 'hub_profile_id',
    });
  };

  return hub;
}
