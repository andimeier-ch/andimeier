import { InputHTMLAttributes } from 'react';
import FormField from './FormField';

export default function Input({
    type,
    label,
    name,
    required,
    ...props
}: {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    label: string;
    name: string;
    required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <FormField label={label} name={name} required={required}>
            <input
                className="form-field__input"
                type={type}
                name={name}
                id={name}
                {...props}
            />
        </FormField>
    );
}
