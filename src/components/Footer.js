import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add all the Font Awesome icons you want to use to the library
library.add(fab);

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <div className='form-cont'>
                <form action method="post">
                  <input type="email" name="email" /><input type='submit' name='subscribe' value='Subscribe'></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sb__footer section_padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-link-div'>
          <h4>Otic</h4>
            <a href="#" className='anchor'>
              <p>Our comprehensive suite of services<br></br>
              empowers you to soar above the competition<br></br>
              and leave an
                 indelible mark on your industry</p>
            </a>
            <a href="#"  className='anchor'>
              <p>Phone: +256 706377254</p>
            </a>
            <a href="#"  className='anchor'>
              <p>Email: info@otic.com</p>
            </a>
          </div>  
          <div className='sb__footer-link-div'>
            <h4>Useful Links</h4>
                <a href="#"  className='anchor'>
                  <p>Home</p>
                </a>
                <a href="#"  className='anchor'>
                  <p>Contact us</p>
                </a>
                <a href="#"  className='anchor'>
                  <p>News and Updates</p>
                </a>
          </div>
        
          <div className='sb__footer-link-div'>
            <h4>Use Cases</h4>
                <a href="#"  className='anchor'>
                  <p>AI in schools</p>
                </a>
                <a href="#"  className='anchor'>
                  <p>AI in marketers</p>
                </a>
                <a href="#"  className='anchor'>
                  <p>AI in Banks</p>
                </a>
          </div>
          <div className='sb__footer-link-div'>
              <h4>Our Social Networks</h4>
              <div className='socialmedia'>
                <p><a href='https://twitter.com/otic_tech'><FontAwesomeIcon icon={['fab', 'twitter']} size="1x" className="icon-spacing"/></a></p>
                <p><FontAwesomeIcon icon={['fab', 'instagram']} size="1x" className="icon-spacing"/></p>
                <p><FontAwesomeIcon icon={['fab', 'facebook']} size="1x" className="icon-spacing"/></p>
                <p><FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" className="icon-spacing"/></p>
                  </div>
          </div>
        </div>

      <hr></hr>

      <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
              <p>
              &copy; Copyright <strong><span className='otic'>Otic</span></strong>. All Rights Reserved
              </p>
          </div>
      </div>


      </div>
    </div>
  )
}

export default Footer