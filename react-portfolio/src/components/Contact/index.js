import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className='vh-100'>

      <section className='contact-form'>
        <h1 className='heroHeader'>Contact Me</h1>
        <form id="form-handler" onSubmit={handleSubmit}>
          
            <p className='contact-headers'>Name:</p>
            <input className="contact-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />

            <p className='contact-headers'>Email:</p>
            <input className="contact-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />

            <p className='contact-headers'>Message:</p>
            <textarea className="contact-input" name="message" defaultValue={message} onBlur={handleChange} />

            <div className="button">
              <button data-testid="button" type="submit">Submit</button>
            </div>
         
        </form>
      </section>
    </div>
  );
}

export default Contact;
