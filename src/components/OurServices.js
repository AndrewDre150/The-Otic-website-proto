import React from 'react';
import FadeTransition from './fade';


function OurServices() {
  return (
    <div>
      <p><div className="service-content">
          <h3>Our Services</h3></div></p>
   
    <div className="services">    
      <div className="service-card">
      <FadeTransition>
        <img src="dataanalysis.jpeg" alt="Service 1" className="service-image" />
        </FadeTransition>
        <FadeTransition>
        <div className="service-content">
          
          <h3>AI Strategy and Roadmap</h3>
          <p>
          We help organizations develop comprehensive AI strategies aligned with their business objectives. Our experts assess the current landscape, identify AI opportunities, and create a roadmap for successful implementation.
          </p>
        </div>
        </FadeTransition>
      </div>
      <div className="service-card">
      <FadeTransition>
        <img src="risk.jpeg" alt="Service 2" className="service-image" />
        </FadeTransition>
        <FadeTransition>
        <div className="service-content">
          <h3>Data Analytics and Insights</h3>
          <p>
          We leverage advanced analytics techniques to unlock the value of data. Our services include data mining, predictive modeling, and visualization to provide actionable insights that drive informed decision-making.
          </p>
        </div>
        </FadeTransition>
      </div>
      <div className="service-card">
      <FadeTransition>
        <img src="predictive.jpeg" alt="Service 2" className="service-image" />
        </FadeTransition>
        <FadeTransition>
        <div className="service-content">
          <h3>AI Solution Development:</h3>
          <p>
          We design and develop custom AI solutions tailored to our clients' specific needs. This includes machine learning algorithms, natural language processing, computer vision, and other AI techniques to address complex business challenges.
          </p>
        </div>
        </FadeTransition>
      </div>
      <div className="service-card">
      <FadeTransition>
        <img src="https://media.istockphoto.com/id/887882750/photo/his-presentations-are-always-informative.jpg?s=612x612&w=0&k=20&c=6VFumyriSInZum1Y8-JL_UxnfYOWT54xpYiI30aIERo=" alt="Service 2" className="service-image" />
        </FadeTransition>
        <FadeTransition>
        <div className="service-content">
          <h3>Responsible AI Consulting:</h3>
          <p>
          We provide guidance and support in adopting responsible AI practices. Our consultants help organizations develop AI governance frameworks, implement ethical guidelines, and address issues of bias, fairness, and privacy.
          </p>
        </div>
        </FadeTransition>
      </div>
      <div className="service-card">
      <FadeTransition>
        <img src="https://comptiacdn.azureedge.net/webcontent/images/default-source/researchreports/business-considerations-before-implementing-ai/top-ai-solutions.png?sfvrsn=6276853c_2" alt="Service 2" className="service-image" />
        </FadeTransition>
        <FadeTransition>
        <div className="service-content">
          <h3>AI Implementation and Integration:</h3>
          <p>
          We support organizations in implementing AI solutions seamlessly into their existing systems. Our experts ensure smooth integration, performance optimization, and provide ongoing support for AI deployments.
          </p>
        </div>
        </FadeTransition>
      </div>
      
    </div>
    </div>
  );
}

export default OurServices;
