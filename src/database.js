import { Sequelize } from "sequelize";
const sequelize = new Sequelize("company", 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Conexión establecida con la base de datos.');
} catch (error) {
  console.error('No se pudo conectar con la base de datos:', error);
};

export default sequelize;
