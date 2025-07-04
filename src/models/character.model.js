import { Sequelize }  from 'config/database.js';
import { DataTypes } from 'sequelize';

export const Character = Sequelize.define('character', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     
    ki: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


    race: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },



});

export default Character;
