import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_52nxrsy', 'template_d0lsdti', form.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,        
        })
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the email.");
            });
    };
    if (submitted) {
        return (
            <>
            <article>
                <p className = "thank-you">
                    Thank you for reaching out! I will get back to you as soon as possible.
                </p>
            </article>
            </>    
        );
       
    };
    return (
        <>
        <h2>Contact</h2>
            <article>
                <p>
                    Welcome! If you would like to get in touch, please fill out the below form to send me a message. Thank you!
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="firstlast">First and last Name:</label>
                    <input type="text" className="input-field" name="firstLast" id="firstLast" required="" autofocus placeholder="First and last name"/>
                    <label for="email">Email:</label>
                    <input type="email" className="input-field" name="eAddress" id="email" required="" pattern="[^ @]+@[^ @]+\.[a-z]+" placeholder="johnsmith@email.com"/>
                    <label for="message">Message: </label>
                    <textarea name="message" className="textarea-field" minlength="1" maxlength="250" id="message" required="" placeholder="250 character or less..."/>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </article>
        </>
    );
};

export default ContactForm;