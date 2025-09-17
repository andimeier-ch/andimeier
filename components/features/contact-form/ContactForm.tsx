import Button from '@/components/blocks/button/Button';
import Input from '@/components/blocks/form/Input';
import Textarea from '@/components/blocks/form/Textarea';
import './contact-form.scss';

export default function ContactForm({ onCancel }: { onCancel: () => void }) {
    return (
        <form className="contact-form">
            <Input type="email" label="E-Mail" name="email" required />
            <Textarea label="Nachricht" name="message" rows={6} required />

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
                    Abschicken
                </Button>
            </div>
        </form>
    );
}
