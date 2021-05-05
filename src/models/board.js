'use strict';


import user from './user';


module.exports = (sequelize, DataTypes) => {
  const board = sequelize.define('board', {
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
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Board id needs to be present',
        },
      },
    board_name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Board name from cloud must be present',
      },
    },
    board_user_token: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Board token must be provided',
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

  board.associate = function(models) {
    board.hasOne(models.hub, {
      foreignKey: 'id',
    });
    board.hasOne(models.user, {
      foreignKey: 'id',
    });
  };

  return board;
}
