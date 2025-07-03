import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


export const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,

        {
            host: process.env.HOST,
            dialect: process.env.DIALECT,
        
        
        },
 
);

    export const startDB = async () => {


        try {  

            await sequelize.authenticate();
            console.log ('Se establecio la conexion con la base de datos')
            await sequelize.sync();

             } catch (error) {

            console.log('No se pudo conectar con la base de datos');


             }



    };