import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        
        <p>Request successful. We shall contact you soon</p>
        <a alt="timesicon" style={{color: 'red'}} onClick={onClose}>Close</a>
      </div>
    </div>
  );
};

export default Popup;
