import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b80fc4ed6e2a96",
    pass: "1a35b11b8e604b"
  }
});

app.post('/feedbacks', async (req, res) => { //req = requisição res = resposta
    const { type, comment, screenshot } = req.body;
    
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <test@feedget.com>',
        to: 'Joao Vitor <joaovitorl.ferreira@hotmail.com>',
        subject: 'New Feedback',        
        html: [
            `<div style="font-family: sans-serify; font-size: 16px; color: #111;"`,
            `<p>Tipo do Feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,     
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({data: feedback}) ; //201 = status para reportar que algo foi criado
})

app.listen(3333, () => {
    console.log('HTTP server running!')
});