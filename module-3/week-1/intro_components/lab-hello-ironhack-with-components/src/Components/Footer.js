import React from "react";
import InfoBox from "./InfoBox";

const Footer = (props) => {
  return (
    <div className="d-flex">
      <InfoBox
        image="/images/icon1.png"
        title="Declarative"
        subtext="React makes it painless to create interactive UIs"
      />
      <InfoBox
        image="/images/icon2.png"
        title="Toto"
        subtext="React makes it painless to create interactive UIs"
      />
      <InfoBox
        image="/images/icon3.png"
        title="Declarative"
        subtext="React makes it painless to create interactive UIs"
      />
      <InfoBox
        image="/images/icon4.png"
        title="Declarative"
        subtext="React makes it painless to create interactive UIs"
      />
    </div>
  );
};

export default Footer;
