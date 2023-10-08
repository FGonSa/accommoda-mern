import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// busca el archivo .env en la raíz del proyecto y carga todas las variables de entorno definidas en el archivo
dotenv.config();

const app = express()

//Conexión con el Puerto que hay en ENV o en su defecto 6001
const PORT = process.env.PORT || 6001;

//Conexión MONGO DB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
