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
  <div className='card_text'>
    <div>
      <h2>Why our panel?</h2>
      <p>Learn why using our panel is the best & cheapest way to get popular online.</p>
    </div>
  </div>
  <div className='card_main_container'>
    <div className='flex_card'>
      <div className='card'>
        <div className='card_category'>
          <div className='card_icon'>
          
          </div>
          <div className='card_info'>
          <p>Superb quality</p>
            <p>You will be pleasantly surprised at the results.</p>
          </div>

        </div>

      </div>
      <div className='card'>
      <div className='card_category'>
          <div className='card_icon'>
            
          </div>
          <div className='card_info'>
          <p>Many payment options</p>
            <p>Great variety of payment methods for you to choose from.</p>
          </div>

        </div>

      </div>

    </div>
    <div className='flex_card'>
      <div className='card'>
      <div className='card_category'>
          <div className='card_icon'>
            
          </div>
          <div className='card_info'>
          <p>Really cheap</p>
            <p>All services offered on our panel are super affordable.</p>
          </div>

        </div>

      </div>
      <div className='card'>
      <div className='card_category'>
          <div className='card_icon'>
            
          </div>
          <div className='card_info'>
          <p>Delivered quickly</p>
            <p>Enjoy the extra short order delivery time on our panel.</p>
          </div>

        </div>

      </div>

    </div>

    </div>
    <div className='social_container'>
      <div className='social_flex_container'>
        <div className='social_card'>
          <div className='social_icon'>

          </div>
          <div className='social_text'>
            <h4>INSTAGRAM</h4>
            <p>We always strive to provide the best services possible.</p>
          </div>

        </div>
        <div className='social_card'>
          <div className='social_icon'>

          </div>
          <div className='social_text'>
            <h4>FACEBOOK</h4>
            <p>All services offered on our panel are super affordable.</p>
          </div>

        </div>
        

      </div>
      <div className='social_flex_container'>
      <div className='social_card'>
          <div className='social_icon'>

          </div>
          <div className='social_text'>
            <h4>TTWITTER</h4>
            <p>We offer various options to add funds to your account.</p>
          </div>

        </div>
        <div className='social_card'>
          <div className='social_icon'>

          </div>
          <div className='social_text'>
            <h4>SNAPCHAT</h4>
            <p>We provide automated order processing on our panel.</p>
          </div>

        </div>

      </div>

    </div>
    <div className='checkout_text'>
      <h3>Where to begin?</h3>
      <p>Check out the step-by-step tutorial on how to get started on our SMM panel.</p>
    </div>
    <div className='begin_container'>
      <div className='begin_flex_container'>
        <div className='register_container'>
          <div className='number'>
            <p>1</p>
          </div>
          <div className='register_text'>
            <h4>1. Register & log in</h4>
            <p>You need to create an account and then log in.</p>
          </div>

        </div>
        <div className='register_container'>
          <div className='number'>
            <p>2</p>
          </div>
          <div className='register_text'>
            <h4>2. Add funds</h4>
            <p>Add funds using a preferred payment method.</p>
          </div>

        </div>

      </div>
      <div className='begin_flex_container'>
      <div className='register_container'>
          <div className='number'>
            <p>3</p>
          </div>
          <div className='register_text'>
            <h4>3. Pick services</h4>
            <p>Place orders and help your business gain more popularity.</p>
          </div>

        </div>
        <div className='register_container'>
          <div className='number'>
            <p>4</p>
          </div>
          <div className='register_text'>
            <h4>4. Superb results</h4>
            <p>This is it! You will get the results that you want very soon.</p>
          </div>

        </div>


      </div>

    </div>
    </>
  )
}

export default Home