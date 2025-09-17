import { useActionState } from 'react';
import { sendMail, sendMailFormState } from '@/lib/actions';
import Button from '@/components/blocks/button/Button';
import Input from '@/components/blocks/form/Input';
import Textarea from '@/components/blocks/form/Textarea';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import './contact-form.scss';
import ContactFormMessages from './ContactFormMessages';

export default function ContactForm({ onCancel }: { onCancel: () => void }) {
    const [formState, formAction, isPending] = useActionState<
        sendMailFormState | null,
        FormData
    >(sendMail, null);

    if (formState?.ok) {
        return (
            <div>
                <ContactFormMessages
                    messages={formState.messages}
                    type="success"
                />

                <div className="contact-form__actions">
                    <Button size="small" onClick={onCancel}>
                        OK 👍🏻
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form className="contact-form" action={formAction}>
            <Input type="email" label="E-Mail" name="email" required />
            <Textarea label="Nachricht" name="message" rows={6} required />

            {formState && (
                <ContactFormMessages
                    messages={formState.messages}
                    type="error"
                />
            )}

            <div className="contact-form__actions">
                <Button
                    type="button"
                    size="small"
                    hierarchy="secondary"
                    onClick={onCancel}
                >
                    Abbrechen
                </Button>

                <Button type="submit" size="small">
                    {isPending ? 'Wird gesendet...' : 'Abschicken'}
                </Button>
            </div>
        </form>
    );
}
