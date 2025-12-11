import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Maincontent from "../comp/Maincontent";
import { Helmet } from 'react-helmet-async';

const Javascript = () => {
  return (
    <div>
       <Helmet>
                    <title>JavaScript page</title>
                  </Helmet>
      <Header />
      <Maincontent NamePage="JAVA SCRIPT" designer="ahmad" />
      <Footer />
    </div>
  );
};

export default Javascript;
