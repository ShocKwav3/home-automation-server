'use strict';


import role from './role';


module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Category name is missing',
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please specify role id (actuator/sensor)',
      },
      references: {
        model: role,
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });

  category.associate = function(models) {
    category.belongsTo(models.role, {
      foreignKey: 'role_id',
    });

    category.hasMany(models.device, {
      foreignKey: 'id',
    })
  };

  return category;
}
