import React, { Component } from "react";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
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
      </div>
    );
  }
}

export default App;
