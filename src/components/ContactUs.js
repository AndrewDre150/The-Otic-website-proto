import React from 'react';
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from './PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FaUser } from "react-icons/fa";

function ContactUs() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here

    // Display the pop-up
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_ubwv9cr', 'template_3zuw1xm', form.current, 'Am-WSXTjjIiZM4q54')
     .then((result) => {
    
     form.current.reset();
     setShowPopup(true);
     }, (error) => {
     form.current.reset();
     setShowPopup(true);
     });
 };
  return (
    <div className="contactus">
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			
  	 				<li style={{color: 'white'}}>Please <strong><a a href="mailto:info@oticanalytics.ai" style={{color: "orange", fontSize: "20px"}} >Email </a></strong>us to find out more.</li>
  	 				
  	 			
  	 		</div>
  	 		<div class="hide">
  	 			<h4>GET IN TOUCH</h4>
  	 			<ul>
  	 				<li>Regus,</li>
  	 				<li>The Acacia Mall,</li>
  	 				<li>14-18 Cooper Road</li>
  	 				<li>Kololo</li>
  	 				<li>4th Floor,#355</li>
					   <li>PO Box 11296 Kampala,Uganda</li>
					   <li>info@oticanalytics.ai</li>
  	 			</ul>
  	 		</div>
  	 	
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
				   
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  );
}

export default ContactUs;



