import express from 'express';
import bodyParser from 'body-parser';
import tenisRoutes from './routes/tenisRoutes.js';
import sequelize from './config/dbConfig.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tenis', tenisRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
});
