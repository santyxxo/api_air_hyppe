import { Sequelize } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Tenis = sequelize.define('tenis', {
  nombre: {
    type: Sequelize.STRING
  },
  marca: {
    type: Sequelize.STRING
  },
  tallas: {
    type: Sequelize.STRING
  },
  cantidad: {
    type: Sequelize.INTEGER
  },
  precio: {
    type: Sequelize.FLOAT
  }
});

export default Tenis;
