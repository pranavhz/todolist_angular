const {Sequelize} = require("./database");
const { STRING, INTEGER } = require("sequelize");

const table = Sequelize.define(
    "todo",
    {
      srno: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      task: {
        type: STRING,
        allowNull: false,
      },
    },
    { timestamps: false, freezeTableName: true }
  );

  module.exports={table};
