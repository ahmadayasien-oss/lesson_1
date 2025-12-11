import React from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../comp/Header';
import Footer from '../comp/Footer';
import Maincontent from '../comp/Maincontent';

const Css = () => {
    return (
        <div>
             <Helmet>
        <title>Css page</title>
        <meta name='discription' content='cssssss'/>
      

      </Helmet>
<p>Css page</p>
       <Header/>
  <Maincontent NamePage="CSS" designer="ahmad"/>
  
  <Footer/>
        </div>
    );
}

export default Css;
