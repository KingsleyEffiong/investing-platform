import './Home.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0d7porm', 'template_ds6g5kh', form.current, 'AvuT4KAYiKWzMrkYU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <>
  <main className="container">
    <div className='form-container'>
    <form ref={form} onSubmit={sendEmail} className='login-form'>
    <h2>SigIn to access your trade platform and become part of our team</h2>
      <span>
      <label>Name</label>
      <input type="text" name="user_name" />
      </span>
      <span>
      <label>Email</label>
      <input type="email" name="user_email" />
      </span>
      <span>
      <label>Message</label>
      <textarea name="message" placeholder='whats the reason for investing in our plaform'/>
      </span>
      <button type="submit" value="Send" >Submit</button>
    </form>
    </div>
  </main>
    </>
  )
}

export default Home