import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nombre_basedatos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
