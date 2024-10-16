// src/components/IngredientList.jsx
import React from "react";
import "/src/App.css";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  return (
    <Ingredient
      ingredients={props.ingredients}
      handleBurger={props.handleAddBurger}
      msg={props.msg}
    />
  );
};

export default IngredientList;
