import React from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
function Team() {
  return (
    <div className='hide'>
      <center><h3>Our Team</h3></center>
    <div className="team">
      
      <div className="team-card">
        <img src="nesta-1.jpeg" alt="Service 1" className="team-image" />
        <div className="team-content">
          <h3>CEO & Founder</h3>
          <p>Nesta Paul</p>
        </div>
       <RiArrowDropUpLine />
      </div>
      <div className="team-card">
        <img src="king-1.jpeg" alt="Service 2" className="team-image" />
        <div className="team-content">
          <h3>Chief Technology Officer</h3>
          <p>
            King Edwin
          </p>
        </div>
      </div>
     
      
    </div></div>
  );
}

export default Team;
