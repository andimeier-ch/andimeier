import FormField from '@/components/blocks/form/FormField';

export default function ContactForm() {
    return (
        <form>
            <FormField type="email" label="E-Mail" name="email" />
        </form>
    );
}
