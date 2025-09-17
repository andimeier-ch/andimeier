'use server';

import nodemailer from 'nodemailer';
import * as z from 'zod';

export type sendMailFormState = {
    ok: boolean;
    message: string;
};

const ContactMessage = z.object({
    email: z.email('Gib eine gültige E-Mail Adresse ein.'),
    message: z
        .string()
        .min(
            10,
            'Gib eine Nachricht ein, die länger mindestens 10 Zeichen lang ist.'
        ),
});

export async function sendMail(
    prevState: sendMailFormState | null,
    formData: FormData
): Promise<sendMailFormState> {
    const data = {
        email: formData.get('email'),
        message: formData.get('message'),
    };

    const parsed = ContactMessage.safeParse(data);

    if (!parsed.success) {
        const message = parsed.error.issues
            .map((issue) => `❌ ${issue.message}`)
            .join('\n');

        return { ok: false, message };
    }

    const { email, message } = parsed.data;

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
