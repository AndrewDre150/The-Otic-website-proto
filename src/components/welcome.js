import aboutImage from './aboutus.jpeg';
import AutoTyping from './autoscroll';
import React, { useEffect, useRef, useState } from 'react';
import FadeTransition from './fade';


function AboutUs() {
 
  return (
    <section id="about" className="about">
      <div className="container" >
        <div className="about-content">
          <div className="about-text">
        
            <p><FadeTransition>
             <strong>Our team </strong> 
             is to empower organizations with the tools and expertise to transform responsibly through AI and data-driven decision-making. We are committed to delivering innovative solutions that drive positive change, optimize operations, and create long-term value for our clients
             </FadeTransition>
            </p>
          </div>
          <FadeTransition>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          </FadeTransition>
        </div>
      </div>
      <div className="change">
        <div className="about-content">
          <FadeTransition>
        <div className="about-image">
            <img src="competitive.jpeg" alt="About Us" />
          </div>
          </FadeTransition>
          <div className="about-text">
          <FadeTransition>
            <p>
           <strong> Our mission</strong>  is to empower organizations with the tools and expertise to transform responsibly through AI and data-driven decision-making. We are committed to delivering innovative solutions that drive positive change, optimize operations, and create long-term value for our clients.
            </p>
            </FadeTransition>
          </div>
         
          
        </div>
      </div>
      <div className="menu_toggle">
        <div className="about-content">
          <div className="about-text">
          <FadeTransition>
            <p>
           <strong> Our mission</strong>  is to empower organizations with the tools and expertise to transform responsibly through AI and data-driven decision-making. We are committed to delivering innovative solutions that drive positive change, optimize operations, and create long-term value for our clients.
            
            </p>
            </FadeTransition>
          </div>
          <FadeTransition>
          <div className="about-image">
            <img src="competitive.jpeg" alt="About Us" />
          </div>
          </FadeTransition>
        </div>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
          
            <p>
            <FadeTransition>
             <strong> Values</strong> We prioritize ethical practices, transparency, and accountability in the deployment of AI technologies. Our commitment to responsible AI encompasses fairness, explainability, bias mitigation, and privacy protection, ensuring the well-being of individuals and society.
             </FadeTransition>
            </p>
          </div>
          
          <div className="about-image">
          <FadeTransition>
            <img src="service4.png" alt="About Us" />
            </FadeTransition>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  const test = '  Our Services'
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const targetRef = useRef("");
  return (
    <div >
    <main >
      <section className="hero"  >
        <div className="row container" ref={targetRef}  >
          <div className="column" style={{zIndex: '1'}}>
         <h1></h1>  
            <h2 style={{color:'white'}} > <AutoTyping text="   Welcome to OTIC Analytics " speed={180}/>
            </h2>
            <p className='column'>
          
            </p>
            
            <div className="buttons">
              <button className="btn" onClick={() => scrollToSection('services')}>
              
              <AutoTyping text="  Our Services " speed={150}> </AutoTyping>
              </button>
              <FadeTransition>
              <button className="btn" onClick={() => scrollToSection('contact')}>
                Contact Us
              </button>  </FadeTransition>
            </div>
          </div>
         
        </div>
       <div ><img className='curveImg' src='https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-05b116e/wp-content/uploads/2020/12/Asset-1.png'></img>
       <img src='bg-bottom-hero.png' style={{bottom: '0', position:'absolute', width:'100vw', height: '20vh'}}></img>
      <img src='pngegg (4).png' style={{bottom: '20px', position:'absolute',height: '70vh', left: '40%'}} />
      <img src='pngegg (1).png' className='hide' style={{bottom: '20px', position:'absolute',height: '30vh', left: '0'}}  />
      <img src='pngegg.png' className='hide' style={{top: '20px', position:'absolute',height: '35vh',  left: '0'}}  />
       
       </div>
      
      </section>

      
    </main>
    
    <AboutUs />
    </div>
  );
}




export default Welcome;
