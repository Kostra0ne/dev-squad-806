import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "styles/Button.scss";
import { UserContext } from "./UserContext";

const Button = ({
  type = "default",
  className = "",
  isFontAwesome,
  children,
  handleClick,
}) => {
  const myContext = useContext(UserContext);

  if (!isFontAwesome) {
    return (
      <button
        className={`Button Button--${type} ${className} `}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
