import React from "react";
import Aboutv3 from "../aboutv3";
import Blogv3 from "../blogv3";
import Contactv3 from "../contactv3";
import Ctav3 from "../ctav3";
import Footerv2 from "../global/footerv2";
import HeaderMarketing from "../global/headerMarketing";
import Herov3 from "../herov3";
import Pricing from "../pricing";
import Servicev2 from "../servicev2";
import Teamv3 from "../teamv3";
import Testimonialv3 from "../testimonialv3";

const MarketingSolution = ({ header }) => {
  return (
    <div>
      <HeaderMarketing header={header} />
      <Herov3 isBg="yes" />
      <Aboutv3 isBg="" />
      <Servicev2 isBg="yes" />
      <Ctav3 isBg="" />
      <Teamv3 isBg="yes" />
      <Pricing isBg="" />
      <Testimonialv3 isBg="yes" />
      <Blogv3 isBg="" />
      <Contactv3 isBg="yes" />
      <Footerv2 />
    </div>
  );
};

export default MarketingSolution;
