import './Home.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as AiIcons from 'react-icons/ai'

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
            <AiIcons.AiFillSetting className='icon_setting'/>
          
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
            <AiIcons.AiFillDollarCircle className='icon_dollar'/>
            
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
            <AiIcons.AiOutlineComment className='icon_comment'/>
            
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
            <AiIcons.AiFillCarryOut className='icon_carryout'/>
            
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
            <AiIcons.AiFillInstagram className='social_network_icon'/>

          </div>
          <div className='social_text'>
            <h4>INSTAGRAM</h4>
            <p>We always strive to provide the best services possible.</p>
          </div>

        </div>
        <div className='social_card'>
          <div className='social_icon'>
            <AiIcons.AiFillFacebook className='social_network_icon'/>

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
            <AiIcons.AiFillTwitterSquare className='social_network_icon'/>

          </div>
          <div className='social_text'>
            <h4>TWITTER</h4>
            <p>We offer various options to add funds to your account.</p>
          </div>

        </div>
        <div className='social_card'>
          <div className='social_icon'>
          <AiIcons.AiOutlineWhatsApp className='social_network_icon'/>
          </div>
          <div className='social_text'>
            <h4>WHATSAPP</h4>
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
    <div className='carouser'>
      <div className='ask_questions'>
        <h4>Top 5 Frequently Asked Questions</h4>
        <p>Our staff chose some of the most popular questions about SMM panels and replied to them.</p>
      </div>
      <div className='questions'>
        <div>
          <ul>
            <h4>What are SMM panels?</h4>
            <li>
            An SMM panel is an online shop that you can visit to puchase SMM services at great prices.
            </li>
          </ul>

        </div>
        <div>
        <ul>
            <h4>What SMM services do you have?</h4>
            <li>
            On our panel we sell different types of SMM services, such as likes, followers, views and more.
            </li>
          </ul>
        </div>
        <div>
        <ul>
            <h4>Are SMM services that are sold here safe to order?</h4>
            <li>
            It is definitely safe, it won't get your accounts banned.
            </li>
          </ul>
        </div>
        <div>
        <ul>
            <h4>What is the purpose of mass orders?</h4>
            <li>
            The mass order feature exists to give users an opportunity to place multiple orders with different links at the same time.
            </li>
          </ul>
        </div>
        <div>
        <ul>
            <h4>What does the Drip-feed feature do?</h4>
            <li>
            If you want the growth of your social media account look more seamless, Drip-feed can help you with that. Let's say you want 3000 likes on your Instagram post, you can either get all 3000 right away or make it happen gradually — for example, 300 likes/day for 10 days.
            </li>
          </ul>
        </div>

      </div>
      

    </div>
    <footer>
      <a href=''>© Powered by InvestAmerica.</a>
    </footer>
   
    </>
  )
}

export default Home