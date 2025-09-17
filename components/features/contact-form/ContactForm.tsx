import { useActionState, useEffect, useRef } from 'react';
import { sendMail, sendMailFormState } from '@/lib/actions';
import Button from '@/components/blocks/button/Button';
import Input from '@/components/blocks/form/Input';
import Textarea from '@/components/blocks/form/Textarea';
import './contact-form.scss';
import ContactFormMessages from './ContactFormMessages';

export default function ContactForm({ onCancel }: { onCancel: () => void }) {
    const focusedElementRef = useRef<HTMLInputElement>(null);

    const [formState, formAction, isPending] = useActionState<
        sendMailFormState | null,
        FormData
    >(sendMail, null);

    useEffect(() => {
        if (focusedElementRef.current) {
            focusedElementRef.current.focus();
        }
    }, []);

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
            <Input
                type="email"
                label="E-Mail"
                name="email"
                ref={focusedElementRef}
                required
            />
            <Textarea label="Nachricht" name="message" rows={6} required />

            {formState && (
                <ContactFormMessages
                    messages={formState.messages}
                    type="error"
                />
            )}

            <div className="contact-form__actions">
                <Button type="submit" size="small">
                    {isPending ? 'Wird gesendet...' : 'Abschicken'}
                </Button>

                <Button
                    type="button"
                    size="small"
                    hierarchy="secondary"
                    onClick={onCancel}
                >
                    Abbrechen
                </Button>
            </div>
        </form>
    );
}
