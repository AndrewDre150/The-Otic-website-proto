import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import FadeTransition from './fade';

function Contact() {
  return (
    <div className='contact1'>
        <div className='cont'>
            <p>CONTACT</p>
            <h3>Contact Us</h3>
        </div>
        <div className='columns'>
            <div className='col-1'>
                <p className='icon'><FontAwesomeIcon icon={faMapMarkerAlt} size='2x'/></p>
                <h2>Our Address</h2>
                <p id='space'>Our comprehensive suite of services empowers you to soar above the competition<br></br> and
                     leave an indelible mark on your industry</p>
            </div>
            <div className='col-2'>
                <p className='icon'><FontAwesomeIcon icon={faEnvelope} size='2x'/> </p>
                <h2>Email Us</h2>
                <p id='space'>info@otic.com</p>
            </div>
            <div className='col-3'>
                <p className='icon'> <FontAwesomeIcon icon={faPhone} size='2x'/></p>
                <h2>Call Us</h2>
                <p id='space'>+256 706377254</p>
            </div>
        </div>
        <div className='form-container'>
            <form>
                <div className='f-inputs'>
                <input type='name' placeholder='Your name' name='name'></input>
                <input type='email' placeholder='Your Email' name='email'></input>
                </div>
                <div className='subject'>
                <input type='name' placeholder='Subject' name='subject'></input>
                </div>
                <div className='message'>
                <textarea type='textarea' placeholder='Message' name='message' rows={3}></textarea>
                </div>
                <button className='center-button'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact