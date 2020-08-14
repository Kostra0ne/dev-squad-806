import React from "react";
import "styles/Container.scss";

const Container = ({ children, className }) => {
  return <div className={`Container ${className || ""}`}>{children}</div>;
};

export default Container;
