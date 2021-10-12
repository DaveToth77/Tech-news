const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
               len: [4] 
            }
        }
},
{
    //Table configuration options go here
    sequelize,
    //pass in our imported sequelize connection ( the direct connection to our database) sequelize,
    //dont automatically create createdAt/updateAt timestamp fields
    timestamps: false,
    //dont pluralize name of database table
    freezeTableName: true,
    //use underscores instead of camelcasing
    underscored: true,
   // make it so our model stays lowercase in the database
   modelName: 'User'
}
);

module.exports = User;