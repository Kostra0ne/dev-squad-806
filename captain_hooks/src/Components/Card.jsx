import React from "react";
import "styles/Card.scss";

export const Title = ({ children, className }) => {
  return <h2 className={`Card__title ${className || ""}`}>{children}</h2>;
};

export const SubTitle = ({ children }) => {
  return <h3 className="Card__subtitle">{children}</h3>;
};

export const Image = ({ url, alt }) => {
  return <img className="Card__image" src={url} alt={alt} />;
};

export const Content = ({ children }) => {
  return <p className="Card__content">{children}</p>;
};

export const Link = ({ children, url }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

const Card = ({ children, className, theme }) => {
  return (
    <aside className={`Card Card--${theme} ${className || ""}`}>
      {children}
    </aside>
  );
};

export default Card;
