import { TextareaHTMLAttributes } from 'react';
import FormField from './FormField';

export default function Textarea({
    label,
    name,
    required,
    ...props
}: {
    label: string;
    name: string;
    required?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <FormField label={label} name={name} required={required}>
            <textarea
                className="form-field__input form-field__input--textarea"
                id={name}
                name={name}
                required={required}
                {...props}
            ></textarea>
        </FormField>
    );
}
