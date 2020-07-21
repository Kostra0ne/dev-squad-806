import React, { Component } from "react";
import Greetings from "./Components/Greetings";
import IdCard from "./Components/IdCard";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Iteration 1 */}
        <h1>IdCard</h1>
        <IdCard
          firstName="Toto"
          lastName="Bar"
          gender="male"
          height={192}
          birth={new Date("2001-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName="Foo"
          lastName="Bar"
          gender="male"
          height={192}
          birth={new Date("1900-07-14")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* Iteration 2 */}
        <h1>Greetings</h1>
        <Greetings lang="es">Tom</Greetings>
        <Greetings lang="de">Jennifer</Greetings>

        {/* Iteration 3 */}
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        {/* Iteration 4 */}
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* Iteration 5 */}
        <h1>Credit Card</h1>
        <div className="d-flex">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
    );
  }
}

export default App;
