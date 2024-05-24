import express from 'express';
import bodyParser from 'body-parser';
import tenisRoutes from './routes/tenisRoutes.js';
import db from './config/dbConfig.js'

const app = express();
const port = 3000;
db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/tenis', tenisRoutes);


app.listen(port,()=>{
  console.log(`Servidor inicado en el puerto ${port}`)
})


