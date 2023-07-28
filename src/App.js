// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from './components/header';
import OurServices from './components/OurServices';
import Service from './components/services';
import Team from './components/Team';
import Welcome from './components/welcome';
import firebase from 'firebase/app';
import 'firebase/auth';
import Footer from './components/Footer'
import NewsUpdates from './components/NewsUpdates'
import Contact from './components/Contact'
// import firebase from './components/firebase';
import { Main } from './components/Main';


function App() {
   
  return (
    <div  style={{ margin: 0, padding: 0 , }} >
    <Header  style={{ margin: 0, padding: 0 }}  />
    <div id="home"  style={{ margin: 0, padding: 0 }} >
    <Welcome  style={{ margin: 0, padding: 0 }} /></div>
   
    <div id='services'> <OurServices /></div>

    <div id='newsupdate'><NewsUpdates></NewsUpdates></div>

    <div id='faq'><Main></Main></div>
    
    {/* <div id='contact'><ContactUs /></div> */}
    <div id='contact'><Contact /></div>


    <div id='foot'><Footer/></div>
    </div>
  );
}

export default App;
