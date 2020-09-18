'use strict';


module.exports = (sequelize, DataTypes) => {
    const token = sequelize.define('token', {
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: 'Please specify owner id for token',
            },
        },
        owner_type: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Please specify owner type for token',
            },
        },
        token: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Please specify the token',
            },
            unique: {
                args: true,
                msg: 'Token already assigned',
            },
        },
        expiry_timestamp: {
            type: DataTypes.DATE,
            allowNull: {
                args: false,
                msg: 'Please specify the token expiry time',
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

    return token;
}
