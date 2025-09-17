'use server';

import nodemailer from 'nodemailer';

export type sendMailFormState = {
    ok: boolean;
    message: string;
};

export async function sendMail(
    prevState: sendMailFormState | null,
    formData: FormData
): Promise<sendMailFormState> {
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.cyon.ch',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `Kontaktformular <${process.env.SMTP_USER}>`,
            to: 'hallo@andimeier.ch',
            subject: 'Kontaktanfrage von deiner Website',
            text: `E-Mail: ${email}\n\nNachricht:\n${message}`,
        });

        return {
            ok: true,
            message: '🎉 Deine Nachricht wurde erfolgreich übermittelt.',
        };
    } catch (error) {
        console.error(error);

        return {
            ok: false,
            message:
                '❌ Die Nachricht konnte nicht gesendet werden. Versuche es später noch einmal.',
        };
    }
}
