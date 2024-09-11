import mailjet from 'node-mailjet'; // Asegúrate de que este paquete está instalado
import nodemailer from 'nodemailer';    // Asegúrate de tener la importación correcta
import path from 'path'; // Importa path para usarlo más adelante
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import emailConfig from '../config/emailConfig.js';  // Asegúrate de que tu configuración de email esté correctamente importada

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para formatear el nombre
const capitalizeWords = (name) => {
    return name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const submitContactFormMailJet = async (req, res) => {
    const { name, email, message } = req.body;

    // Formatear el nombre
    const formattedName = capitalizeWords(name);

    // Validar datos requeridos
    if (!formattedName || !email || !message) {
        return res.status(400).send('Faltan datos requeridos');
    }

    // Validar el formato del correo electrónico
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    if (!validateEmail(email)) {
        return res.status(400).send('Correo electrónico no válido');
    }

    try {
        // Configurar Mailjet
        const mailjetClient = mailjet.apiConnect(process.env.API_KEY_Mailjet, process.env.SECRET_KEY_Mailjet);

        // Opciones para el correo al propietario
        const mailToOwnerOptions = {
            Messages: [
                {
                    From: {
                        Email: process.env.EMAIL_USER,
                        Name: "Empresa de Limpieza",
                    },
                    To: [
                        {
                            Email: process.env.EMAIL_USER, // Enviar al correo del propietario
                            Name: "Propietario",
                        },
                    ],
                    Subject: `Nuevo mensaje de contacto de ${formattedName}`,
                    HTMLPart: `
                        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
                            <h2 style="text-align: center; color: #2c3e50;">Nuevo mensaje de contacto</h2>
                            <p><strong>Nombre:</strong> ${formattedName}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2980b9;">${email}</a></p>
                            <p><strong>Mensaje:</strong></p>
                            <blockquote style="background-color: #ecf0f1; padding: 15px; border-left: 5px solid #2980b9;">
                                ${message}
                            </blockquote>
                        </div>
                    `,
                },
            ],
        };

        // Opciones para el correo de agradecimiento al usuario
        const mailToUserOptions = {
            Messages: [
                {
                    From: {
                        Email: process.env.EMAIL_USER,
                        Name: "Empresa de Limpieza",
                    },
                    To: [
                        {
                            Email: email, // Enviar al correo del usuario
                            Name: formattedName,
                        },
                    ],
                    Subject: `Gracias por contactarnos, ${formattedName}`,
                    HTMLPart: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px;">
                            <div style="text-align: center;">
                                <h2>¡Gracias por contactarnos, ${formattedName}!</h2>
                                <p>Apreciamos tu mensaje y nos pondremos en contacto contigo en breve.</p>
                            </div>
                            <div style="text-align: center; margin-top: 20px;">
                                <strong>Empresa de Limpieza</strong><br>
                                Teléfono: +1(213)909-1735<br>
                                Email: <a href="mailto:contacto@empresa.com" style="color: #2980b9;">contacto@empresa.com</a><br>
                                <a href="https://www.nombreempresa.com" style="color: #2980b9;">Visita nuestro sitio web</a>
                            </div>
                        </div>
                    `,
                },
            ],
        };

        // Enviar el correo al propietario
        const ownerResponse = await mailjetClient.post('send', { version: 'v3.1' }).request(mailToOwnerOptions);
        console.log('Correo enviado al propietario:', ownerResponse.body);

        // Enviar el correo de agradecimiento al usuario
        const userResponse = await mailjetClient.post('send', { version: 'v3.1' }).request(mailToUserOptions);
        console.log('Correo de agradecimiento enviado al usuario:', userResponse.body);

        return res.status(200).json({ message: 'Correos enviados correctamente' });

    } catch (error) {
        console.error('Error al enviar los correos:', error);
        return res.status(500).json({ error: 'Error al enviar los correos' });
    }
};

export const submitContactFormNodeMailer = (req, res) => {
    const { name, email, message } = req.body;

    // Ejemplo de uso:
    const formattedName = capitalizeWords(name);

    if (!formattedName || !email || !message) {
        return res.status(400).send('Faltan datos requeridos');
    }

    //USO DE LOS SERVICIOS DE NODEMAILER PARA EL MANEJO DE CORREOS
    const transporter = nodemailer.createTransport(emailConfig);

    // Opciones para el correo al propietario
    const mailToOwnerOptions  = {
        from: `"${formattedName}" <${email}>`,
        to: process.env.EMAIL_USER, // Dirección del servidor a la que se envía el correo
        replyTo: email, // Dirección del usuario para que pueda responder
        subject: `Mensaje de ${formattedName}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; color: #333; max-width: 600px; margin: 0 auto; border-radius: 8px; border: 1px solid #e0e0e0;">
            <!-- Header -->
           
            <div style="text-align: center; padding: 20px 0; background-color: #019EE1; border-radius: 8px 8px 0 0;">
                <h1 style="font-family: 'Helvetica Neue', sans-serif; font-size: 24px; color: #ffffff;">New Contact Message</h1>
                <img src="cid:logo" alt="Company Logo" style="width: 150px; margin: 0 auto; display: block;" />
                <p style="font-size: 14px; color: #ffffff;">You have received a new message through your contact form.</p>
            </div>

            <!-- Body -->
            <div style="padding: 20px;">
                <p><strong>Name:</strong> ${formattedName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2980b9;">${email}</a></p>
                <p><strong>Message:</strong></p>
                <blockquote style="background-color: #F9F9F9; padding: 15px; border-left: 5px solid #2980b9; margin: 20px 0;">
                ${message}
                </blockquote>
            </div>

            <!-- Button to review messages -->
            <div style="text-align: center; margin: 20px 0;">
                <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background-color: #86d6fc; color: #7f8c8d; font-size: 16px; text-decoration: none; border-radius: 18px;">
                Open Message
                </a>
            </div>

            <!-- Footer -->
            <div style="background-color: #F7F7F7; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
                <p style="font-size: 12px; color: #999999;">
                This email was generated from the contact form of your website
                <a href="https://www.companyname.com" style="color: #2980b9; text-decoration: none;">Company Name</a>.
                </p>
                <p style="font-size: 12px; color: #999999;">If you were not expecting this email, please ignore it.</p>
            </div>
            </div>
        `,
        attachments: [{
            filename: 'LogoF.png',
            path: path.join(__dirname, '../../public/images/galeria/LogoF.png'),
            cid: 'logo'
        }]
    };    

    // Opciones para el correo de agradecimiento al usuario
    const mailToUserOptions = {
        from: `Empresa de Limpieza <${process.env.EMAIL_USER}>`, // El correo del propietario como remitente
        to: email, // El correo del usuario
        subject: `Thank you for contacting us, ${formattedName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px; border: 1px solid #e1e1e1;">
            <div style="background-color: #019EE1; padding: 20px; border-radius: 8px; text-align: center;">
                <img src="cid:logo" alt="Company Logo" style="width: 200px; margin: 0 auto; display: block;" />
            </div>
            <div style="background-color: #ffffff; padding: 20px;">
                <h2 style="text-align: center; color: #2c3e50; font-size: 22px;">Thank you for contacting us!</h2>
                <p style="text-align: center; color: #333333; font-size: 16px;">We appreciate your message and will get back to you shortly.</p>
                <p style="text-align: center; color: #333333; font-size: 14px;">In the meantime, if you have any urgent questions, feel free to call or email us.</p>
            </div>

            <div style="background-color: #ffffff; padding: 20px; text-align: center;  border-radius: 0 0 14px 14px;">
                <img src="cid:logoSmall" alt="Small Logo" style="width: 75px; margin: 0 auto; display: block;" />
            </div>

            <div style="background-color: #f4f4f4; padding: 20px; text-align: center; margin-top: 20px;">
                <p style="color: #7f8c8d;">
                <strong>Maintenance and Cleaning</strong><br>
                Phone: +1(213)909-1735<br>
                Email: <a href="mailto:cr7776279@gmail.com" style="color: #2980b9;">cr7776279@gmail.com</a><br>
                <a href="https://www.nombreempresa.com" style="color: #2980b9; text-decoration: none;">Visit our website</a>
                </p>
                <p style="font-size: 12px; color: #7f8c8d;">This is an automated email. No need to reply to this message.</p>
            </div>

            <div style="text-align: center; font-size: 12px; color: #7f8c8d; padding-top: 10px; border-top: 1px solid #e1e1e1; margin-top: 10px;">
                <p style="margin: 0;">© 2024 Maintenance and Cleaning. All rights reserved.</p>
                <a href="https://www.nombreempresa.com/privacidad" style="color: #2980b9;">Privacy Policy</a> | 
                <a href="https://www.nombreempresa.com/terminos" style="color: #2980b9;">Terms and Conditions</a>
            </div>
            </div>
        `,
        attachments: [
            {
                filename: 'LogoF.png',
                path: path.join(__dirname, '../../public/images/galeria/LogoF.png'),
                cid: 'logo'
            },
            {
                filename: 'LOGO.png',
                path: path.join(__dirname, '../../public/images/galeria/LOGO.png'),
                cid: 'logoSmall'
            }
        ]
      };
      

    // Envío de los correos
    const sendMailPromises = [
        new Promise((resolve, reject) => {
            transporter.sendMail(mailToOwnerOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo al propietario:', error);
                    reject(`Error al enviar el correo al propietario: ${error.message}`);
                } else {
                    console.log('Correo al propietario enviado:', info.response);
                    resolve(info);
                }
            });
        }),
        new Promise((resolve, reject) => {
            transporter.sendMail(mailToUserOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo al usuario:', error);
                    reject(`Error al enviar el correo al usuario: ${error.message}`);
                } else {
                    console.log('Correo de agradecimiento enviado al usuario:', info.response);
                    resolve(info);
                }
            });
        })
    ];

    Promise.all(sendMailPromises)
        .then((results) => {
            // Ambos correos se enviaron correctamente
            res.status(200).send('Correos enviados correctamente');
        })
        .catch((error) => {
            // Al menos uno de los correos falló
            res.status(500).send(error);
        });

};