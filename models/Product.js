// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: String,
      allowNull: false,
    },
    price: {
      type: DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      },
    stock:{
      type: INTEGER,
      allowNull: false,
// set default value of 10
      validate: {
        //Validate is numeric
      },
    },
    //references  category.id
    category_id: {
      type: INTEGER,
    }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
