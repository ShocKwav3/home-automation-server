'use strict';


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
    timestamps: false
  });

  user.associate = function(models) {
    user.hasMany(models.hub, {
      foreignKey: 'id',
    });
  };

  return user;
};
