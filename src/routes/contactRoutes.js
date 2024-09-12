import express from 'express';
import { submitContactFormMailJet, submitContactFormNodeMailer } from '../controllers/contactControllers.js';
import { Message } from 'node-mailjet';

const router = express.Router();

// Ruta para enviar el formulario de contacto usando MailJet
//router.post('/mailjet', submitContactFormMailJet);

// Ruta para enviar el formulario de contacto usando NodeMailer
router.post('/nodemailer', (req, res, next) => {
    console.log("Solicitud recibida en /nodemailer");
    next();
  }, submitContactFormNodeMailer);

  router.get('/hola', (req, res, next) => {
    console.log("Solicitud recibida en /nodemailer");
    res.json({
      message:"Test.."
    })
  }, submitContactFormNodeMailer);

export default router;
