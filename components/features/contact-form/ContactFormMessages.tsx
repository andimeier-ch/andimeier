import './contact-form-messages.scss';

export default function ContactFormMessages({
    messages,
    type,
}: {
    messages: string[];
    type: 'success' | 'error';
}) {
    const classes = `contact-form-messages contact-form-messages--${type}`;

    return (
        <ul className={classes}>
            {messages.map((message) => (
                <li key={message}>{message}</li>
            ))}
        </ul>
    );
}
