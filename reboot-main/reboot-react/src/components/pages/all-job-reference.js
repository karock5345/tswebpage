import React from "react";
import HeaderTS from "../global/headerTS";
import AllJobReferences from "../all-job-references";
import Footer2 from "../global/footerv2";

const AllJobReference = ({ header }) => {
  return (
    <>
      <HeaderTS header={header} />
      <AllJobReferences title="Job References" />
      <Footer2 />
    </>
  );
};

export default AllJobReference;
