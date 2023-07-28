import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Document, Image } from "react-pdf";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyA91GGBqYmDZI3sbEGsUz2VsP-jzwFmG1Q",
  authDomain: "otic-6aff2.firebaseapp.com",
  projectId: "otic-6aff2",
  storageBucket: "otic-6aff2.appspot.com",
  messagingSenderId: "1022591030193",
  appId: "1:1022591030193:web:4da2b59ec7f25123122390",
  measurementId: "G-JG59KXT53H"
};

// Initialize Firebase
const  app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();




function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [image, setImage] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setUser(true);
    } catch (err) {
      console.error(err);
     // alert(err.message);
    }
  };
  const Logout = async () => {
    try {
      await signOut(auth);
      setUser(false);
      
    } catch (err) {
      console.error(err);
    //  alert(err.message);
    }
  };
  useEffect(() => { onAuthStateChanged(auth, (users) => {
    if (users) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const image = users.photoURL;
      setUser(true);
      setImage(image)
      // ...
    } else {
      setUser(false);
      // User is signed out
      // ...
    }
  });},[])

  return (
    <header style={{zIndex: '2'}}>
      <nav className="nav container" >
        <div style={{ display: 'flex', alignItems: 'center',  }}>
         <div style={{width:'5vw'}}></div>   
          <img src="otic--web-logo-2.png" alt="Logo" style={{ width: '120px',left: '0', transform: "scale(1.3)" }} />
          
        </div>
        <div id="menu_toggle"  style={{display: 'flex', marginRight: '20px'}} ><img src={menuOpen ? 'times.svg' : 'bars.svg'} alt="timesicon" id="menu_toggle" onClick={handleMenuToggle} style={{color: "orange", alignItems: "right",}} />
        {user ?  <img alt='Profile picture' id="menu_toggle"  src={image} style={{width: "40px", borderRadius: '50%'}}></img>: '' }
        </div>  
        <ul id='' className={`menu_items ${menuOpen ? "open" : ''}`}>
           <li><a href='#home' className='nav_link'>Home</a></li>
           <li><a href='#services' className='nav_link'>Our Services</a></li>
           <li><a href='#newsupdate' className='nav_link'>News and Updates</a></li>
          <li><a href='#contact' className='nav_link'>Contact</a></li>
    
          {user ? <div>
           
            <li><a onClick={Logout} href="#" className="nav_link">Logout</a></li></div> : <li><a onClick={googleSignIn} href="#"  className="nav_link">Login </a></li> }
            {user ?    <li> <img alt='Profile picture' src={image} style={{width: "40px", borderRadius: '50%'}}></img></li>: '' }
            <li>  <div style={{width:'5vw'}}></div>    </li>
        </ul>
       
      
      </nav>
      <div id="menu_toggle"  className="dropdown">
      {menuOpen && (
        <div className="dropdown-content">
          {/* Dropdown content */}
          <ul>
          <li><Link to="/" className="nav_link">Home</Link></li>
          <li><Link to="/AboutUs" className="nav_link">About Us</Link></li>
          <li><Link to="/NewsUdates" className='nav_link'>News and Updates</Link></li>
          <li><a href="/contact" className="nav_link">Contact</a></li>
          {user ? <li><a onClick={Logout} href="#" className="nav_link">Logout</a></li> : <li><a onClick={googleSignIn} href="#"  className="nav_link">Login </a></li> }
          
          </ul>
        </div>
      )}
    </div>  
    </header>
  );
}

export default Header;
