'use strict';


module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Role name is missing',
      },
    },
  }, {
    timestamps: false,
  });

  role.associate = function(models) {
    role.hasMany(models.category, {
      foreignKey: 'role_id',
    });
  };

  return role;
}
