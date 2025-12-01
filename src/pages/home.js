import React from 'react';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import Maincontent from '../comp/Maincontent';
const Home = () => {
    return (
        <div>
  <Header/>
  <Maincontent NamePage="HOME" designer="ahmad"/>
  
  <Footer/>
        </div>
    );
}

export default Home;
