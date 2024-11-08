import { Sequelize, INTEGER, STRING, DATE, DATEONLY } from "sequelize";
export const define_user = (sequelize: Sequelize) => {
    const User = sequelize.define(
      "Users",
      {
        UserID: {
          type: INTEGER, //defines the tpye
          autoIncrement: true, //increments the primaryKey to keep it unique
          primaryKey: true, //userID will act as primary key 
        },
        Email: {
          type: STRING(255), //defines the type
          unique: true, //must be a unique value
          allowNull: false, //cannot be null
        },
        FirstName: {
          type: STRING(255), //defines the type
          allowNull: false, //cannot be null
        },
        LastName: {
          type: STRING(255),
          allowNull: false,
        },
        DateOfBirth: {
          type: DATEONLY,
          allowNull: false,
        },
        Password: {
          type: STRING(255),
          allowNull: false,
        },
        Role: {
          type: STRING(5),
          allowNull: false,
          validate: {
            isIn: [["Admin", "Owner", "User"]],
          }, //role can only be these values defined in isIN
        },
      },
      { timestamps: true } 
    );
    return User;
  };
  