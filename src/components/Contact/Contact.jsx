import React, { useRef } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  
    return (
      <section id='contact'>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>ziabeherphillips@gmail.com</h5>
              <a href="mailto:ziabeherphillips@gmail.com">Send a message</a>
            </article>
          </div>
  
          <form action="https://formsubmit.co/ziabeherphillips@gmail.com" method="POST">
            <input type="text" name='name' placeholder="Your Full Name" required />
            <input type="email" name='email' placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    )
  }

  export default Contact