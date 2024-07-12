import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true // Opsional, jika Anda ingin nama tabel sesuai dengan nama model
});

(async () => {
  try {
    await db.sync(); // Menjalankan sinkronisasi model dengan database
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

export default User;
