import { sequelize } from './database.js';


const startDB = async () => {


    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos con exito');
        await sequelize.sync();

         } catch(error) {


            console.log('Hubo un problema al conectar con la base de datos');
    
         }


};

export default startDB;