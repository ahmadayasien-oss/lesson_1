import React from 'react';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
import Maincontent from '../comp/Maincontent';
import { Helmet } from 'react-helmet-async';

const Html = () => {
    return (
        <div>
              <Helmet>
                    <title>Html page</title>
                  </Helmet>
   <Header/>
  <Maincontent NamePage="HTML" designer="ahmad"/>
  <Footer/>
        </div>
    );
}

export default Html;
