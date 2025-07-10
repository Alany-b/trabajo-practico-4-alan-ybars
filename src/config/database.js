import  { Sequelize }  from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(

        process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,

{
        host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
},
    
);

export default sequelize;

export const initDB = async () =>  {


	try {
await sequelize.authenticate();
console.log('Conexion a la base de datos exitosa')
await sequelize.sync();
	                
	}catch (error) {
		console.error('Error al conectar con la base de datos:' , error );
	}
	

};