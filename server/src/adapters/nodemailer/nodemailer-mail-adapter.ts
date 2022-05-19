import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b80fc4ed6e2a96",
    pass: "1a35b11b8e604b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
                from: 'Equipe Feedget <test@feedget.com>',
                to: 'Joao Vitor <joaovitorl.ferreira@hotmail.com>',
                subject,
                html: body,
            });
    }
}