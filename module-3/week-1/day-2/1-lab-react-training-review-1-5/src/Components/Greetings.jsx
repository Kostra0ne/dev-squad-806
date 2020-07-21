import React from "react";
import "../styles/Greetings.css";

const langs = {
  de: "Hallo",
  en: "Hello",
  fr: "Bonjour",
  es: "Ola",
};

function Greetings({ lang, children }) {
  return (
    <div className="CardGreetings">
      {langs[lang]} {children}
    </div>
  );
}

export default Greetings;
