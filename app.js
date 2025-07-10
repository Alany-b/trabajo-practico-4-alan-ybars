import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/character.route.js';
//import sequelize  from './src/config/database';
import {  initDB }  from './src/config/database.js';
dotenv.config();

const app = express();
 app.use(express.json());

 app.use("/api/characters", routes);

 const PORT = process.env.PORT || 3000;


initDB().then(() =>{
 app.listen(PORT, () => {
 console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
    });
//fin