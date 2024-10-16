import React from 'react';
import BannerImage from '../assets/header-background-image.jpg';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})`}}></div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>
        <form id='form' method='POST'>
          <label htmlFor='name'>Name</label>
          <input name='name' placeholder='Name' type='text' required/>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Email' type='email' required/>
          <label htmlFor='message'>Message</label>
          <textarea name='message' placeholder='Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
