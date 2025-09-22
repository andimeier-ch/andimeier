import { InputHTMLAttributes, RefObject } from 'react';
import FormField from './FormField';

export default function Input({
    type,
    label,
    name,
    ref,
    required,
    ...props
}: {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    label: string;
    name: string;
    ref?: RefObject<HTMLInputElement | null>;
    required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <FormField label={label} name={name} required={required}>
            <input
                className="form-field__input"
                type={type}
                name={name}
                id={name}
                ref={ref}
                required={required}
                {...props}
            />
        </FormField>
    );
}
