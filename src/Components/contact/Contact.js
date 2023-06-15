import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import './contact.css'



 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('process.env.REACT_APP_YOUR_SERVICE', 'process.env.REACT_APP_YOUR_TEMPLATE', form.current, 'process.env.REACT_APP_YOUR_PUPLICID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    //   form.current.reset();

  };
  
    
  

  
  

  return (
    <div id="contact-page">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;