import mongoose from 'mongoose';

const db= async ()=>{
  try {
      
      await mongoose.connect("mongodb+srv://sbetancourte21:Santiago08@airhippe.sb7yxrv.mongodb.net/?retryWrites=true&w=majority&appName=airhippe");
      console.log("Conexión a la base de datos lista")

  } catch (error) {
      console.error('Error al conectarse con la base de datos:',error.message);
      process.exit(1);
  }
}

export default db;

