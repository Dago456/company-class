const { DataTypes } = require("sequelize");

import sequelize from "../database";

const Product = sequelize.define('product',{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },

    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull:true
    },
},
{
    timestamps:false,
}
);

export default Product