import React from "react";
import "/src/App.css";
import Ingredient from "./Ingredient";

const BurgerStack = (props) => {
  return (
    <Ingredient
      ingredients={props.ingredients}
      handleBurger={props.handleRemoveBurger}
      msg={props.msg}
    />
  );
};

export default BurgerStack;
