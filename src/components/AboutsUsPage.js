// import logo from './logo.svg';
import  { useEffect } from 'react';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Team from "./Team";
import Header from "./header";


// import firebase from './components/firebase';


function AboutUsPage() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '/'; // Chrome requires assigning a non-empty string to returnValue
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div  style={{ margin: 0, padding: 0 , }} >
    <Header  style={{ margin: 0, padding: 0 }}  />

    <div id="about"><AboutUs /></div>
    <div id='team'> <Team /></div>
    <div id='contact'><ContactUs /></div>
    </div>
  );
}

export default AboutUsPage;
