import { ReactNode } from 'react';
import './form-field.scss';

export default function FormField({
    label,
    name,
    required = false,
    children,
}: {
    label: string;
    name: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="form-field">
            {children}

            <label className="form-field__label" htmlFor={name}>
                {label}
                {required ? '*' : undefined}
            </label>
        </div>
    );
}
