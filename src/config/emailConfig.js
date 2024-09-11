import dotenv from 'dotenv';

dotenv.config();

const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Tu correo de Gmail
    pass: process.env.EMAIL_PASS, // Tu contraseña de Gmail o contraseña específica de la app
  },
};

export default emailConfig; // Exportación compatible con ES modules
