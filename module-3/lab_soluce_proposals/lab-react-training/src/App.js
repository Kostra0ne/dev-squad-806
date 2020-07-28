import React, { Component } from "react";
import Greetings from "./Components/Greetings";
import IdCard from "./Components/IdCard";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";
import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import Carousel from "./Components/Carousel";
import NumbersTable from "./Components/NumbersTable";
import FaceBook from "./Components/FaceBook";
import FaceBookAdvanced from "./Components/FaceBookAdvanced";
import Signup from "./Components/Signup";
import RGBColorPicker from "./Components/RGBColorPicker/RGBColorPicker";

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
          firstName="Toto"
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
        {/* Iteration 6 */}
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        {/* Iteration 7  */}
        <h1>Driver Card</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
        {/* Iteration 8 */}
        <h1>Like Button</h1>
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>

        {/* Iteration 9 */}
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        {/* Iteration 10*/}
        <h1>Dice</h1>
        <Dice />

        {/* Iteration 11*/}
        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />

        {/* Iteration 12 */}
        <h1>NumbersTable</h1>

        <NumbersTable limit={12} />
        <NumbersTable limit={20} />

        {/* Iteration 13 */}
        <h1>FaceBook</h1>
        <FaceBook />

        {/* Iteration 14 */}
        <h1>FaceBook Advanced</h1>
        <FaceBookAdvanced />

        {/* Iteration 15 */}
        <Signup />

        {/* Iteration 16 */}
        <h1>RGBColorPicker</h1>
        <RGBColorPicker />
      </div>
    );
  }
}

export default App;
