import React from "react";
import "../styles/greetings.css";

const langs = {
  de: "Hallo",
  en: "Hello",
  fr: "Bonjour",
  es: "Ola",
};

function Greetings({ lang, children }) {
  return (
    <div className="card-greetings">
      {langs[lang]} {children}
    </div>
  );
}

export default Greetings;
