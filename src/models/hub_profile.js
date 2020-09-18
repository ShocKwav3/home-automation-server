'use strict';


module.exports = (sequelize, DataTypes) => {
  const hub_profile = sequelize.define('hub_profile', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Hub profile must have name',
      },
      unique: {
        args: true,
        msg: 'Hub profile with same name already exists',
      },
    },
    settings: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: 'Hub profile needs to have required settings defined',
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

  hub_profile.associate = function(models) {
    hub_profile.hasMany(models.hub, {
      foreignKey: 'id',
    });
  };

  return hub_profile;
}
