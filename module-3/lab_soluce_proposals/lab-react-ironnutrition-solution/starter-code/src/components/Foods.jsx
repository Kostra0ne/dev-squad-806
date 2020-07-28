import React from "react";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import Search from "./Search";
import foods from "../foods.json";

class Foods extends React.Component {
  state = {
    displayForm: false,
    foods,
    filteredFoods: foods,
    // filterValue: "",   // If you want to filter before the render you can use this value as state and use it in the render method.
    todaysFood: [],
  };

  handleDisplayForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  filterFood = (input) => {
    const filteredFoods = this.state.foods.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filteredFoods: filteredFoods });
  };

  pushFood = (food) => {
    // Watch in the food box ! the food we receive is already a copy of the food object with
    // a quantity value added to it.

    // Copying the array.
    // const foods = this.state.foods.slice(); // method 1
    const foodsCopy = [...this.state.foods]; // method 2
    foodsCopy.unshift(food); // Add element to the beginning
    this.setState({ foods: foodsCopy, filteredFoods: foodsCopy, form: false });
  };

  addFood = (food) => {
    /** These three methods achieve the same thing, making a copy of todaysFood */
    // const todaysFood = this.state.todaysFood.slice(); // method 1
    const todaysFoodCopy = [...this.state.todaysFood]; // method 2
    // const todaysFood = this.state.todaysFood.map((food) => food); // method 3

    const found = todaysFoodCopy.find((el) => el.name === food.name); // Find if a food is already present in the array.

    food.calories *= food.quantity;

    if (found) {
      const foundCopy = { ...found }; // Make a copy of the found food in order to modify the object.
      foundCopy.quantity += food.quantity;
      foundCopy.calories += food.calories;
      this.setState({
        todaysFood: todaysFoodCopy.map((f) =>
          f.name === foundCopy.name ? foundCopy : f
        ),
      }); // This allows us to replace the old food object in the todaysFood array, map creates a new array
      // So we end up having a new array with the new copy : )
    } else {
      todaysFoodCopy.push(food);
      this.setState({ todaysFood: todaysFoodCopy });
    }
  };

  render() {
    const totalCalories = this.state.todaysFood.reduce(
      (acc, val) => acc + val.calories,
      0
    );

    // const filtedFoods = this.state.foods.filter((f) =>
    //   f.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
    // );

    return (
      <div>
        <Search filterFood={this.filterFood} />
        <button className="button" onClick={this.handleDisplayForm}>
          Add Food
        </button>
        {this.state.displayForm && <FoodForm pushFood={this.pushFood} />}
        <div>
          <div style={{ width: "70%", float: "left" }}>
            {this.state.filteredFoods.map((el, i) => (
              <FoodBox key={i} food={el} addFood={this.addFood} />
            ))}
          </div>
          <div style={{ width: "30%", float: "right" }}>
            <h2>Today's food</h2>
            <ul>
              {this.state.todaysFood.map((el, i) => (
                <li key={i}>
                  {el.quantity} {el.name} = {el.calories} cal
                </li>
              ))}
              <p>Total: {totalCalories} calories</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
