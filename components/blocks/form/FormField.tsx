import { InputHTMLAttributes } from 'react';
import './form-field.scss';

export default function FormField({
    type,
    label,
    name,
    ...props
}: {
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    label: string;
    name: string;
} & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="form-field">
            <input
                className="form-field__input"
                type={type}
                name={name}
                id={name}
                {...props}
            />

            <label className="form-field__label" htmlFor={name}>
                {label}
            </label>
        </div>
    );
}
