// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

// Configura a API Key do SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { message } = req.body;

  try {
    // Adiciona o log da API Key para depuração (somente para desenvolvimento)
    console.log('API Key do SendGrid:', process.env.SENDGRID_API_KEY);

    await sendgrid.send({
      to: 'seu-email@dominio.com', // Substitua pelo seu endereço de e-mail ou o destinatário desejado
      from: 'seu-email-verificado@dominio.com', // O endereço "from" deve ser verificado no SendGrid
      subject: 'Nova mensagem de contato',
      text: message,
      html: `<p><strong>Mensagem:</strong> ${message}</p>`,
    });

    return res.status(200).json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ message: 'Erro ao enviar email' });
  }
};

export default sendEmail;
