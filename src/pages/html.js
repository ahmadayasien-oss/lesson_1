import React from 'react';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import Maincontent from '../comp/Maincontent';
const Html = () => {
    return (
        <div>
   <Header/>
  <Maincontent NamePage="HTML" designer="ahmad"/>
  <Footer/>
        </div>
    );
}

export default Html;
