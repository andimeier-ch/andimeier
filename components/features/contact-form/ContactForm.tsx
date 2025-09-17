import Input from '@/components/blocks/form/Input';
import Textarea from '@/components/blocks/form/Textarea';

export default function ContactForm() {
    return (
        <form>
            <Input type="email" label="E-Mail" name="email" required />
            <Textarea label="Nachricht" name="message" rows={6} />
        </form>
    );
}
