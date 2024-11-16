import * as React from 'react';

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <h2>New Contact Form Submission</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
