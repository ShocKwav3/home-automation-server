'use strict';

import bcrypt from 'bcrypt';
import constants from 'src/config/constants';


module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Users name is missing',
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email is missing',
      },
      unique: {
        args: true,
        msg: 'Email already in use',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password is missing',
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
    timestamps: false,
    hooks: {
      beforeCreate: function(user, options) {
        user.password = bcrypt.hashSync(user.password, constants.passwordSaltingTimes);
      },
    },
  });

  user.prototype.isPasswordCorrect = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

  user.associate = function(models) {
    user.hasMany(models.hub, {
      foreignKey: 'id',
    });
    user.hasMany(models.board, {
      foreignKey: 'id',
    });
  };

  return user;
}
