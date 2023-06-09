import React from "react";
import Aboutv2 from "../aboutv2";

import Footer2 from "../global/footerv2";
import Herov2 from "../herov2";
// import Herov5 from "../herov5";
// import QuickOverview from "../quick-overview";
import Servicev2 from "../servicev2";
import Projects from "../projects";


import AppFeatures from "../app-features";
import WhatWeDo from "../what-we-do";

import about from "../../data/about.json"
import HeaderTS from "../global/headerTS";


const TsvdHome = ({ header }) => {
    const {aboutv2} = about;
    // const { cta } = ctaData;
    return (
      <>
      <HeaderTS header={header} />
       
      <Herov2 isBg="yes" />
      <Aboutv2 isBg="" aboutData={aboutv2} /> 
      {/* <Herov5 isBg="yes" />       */}
      {/* <QuickOverview isBg="yes" /> */}
      <Servicev2 isBg="yes" />
      <Projects isBg="" />
      <AppFeatures isBg="yes" />
      <WhatWeDo isBg="" />



     <Footer2 />
    </>
  );
};

export default TsvdHome;