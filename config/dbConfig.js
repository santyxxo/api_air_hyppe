import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('air_hyppe', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
