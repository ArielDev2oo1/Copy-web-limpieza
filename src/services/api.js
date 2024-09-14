import axios from 'axios';

const API_URL = 'https://web-limpieza.onrender.com/api/contact/nodemailerr';  // La URL de la API 

export const sendContactForm = async (name, email, message) => {
  try {
    const response = await axios.post(API_URL, {
      name,
      email,
      message,
    });
    return response;
  } catch (error) {
    console.error('Error sending the contact form:', error);
    throw error;
  }
};
