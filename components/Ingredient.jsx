import React from "react";

const Ingredient = (props) => {
  return (
    <ul>
      {props.ingredients.length === 0 ? (
        <h1>No Ingredients</h1>
      ) : (
        props.ingredients.map((ingredient, idx) => {
          return (
            <li key={idx} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button
                onClick={() => {
                  props.handleBurger(ingredient, idx);
                }}
              >
                {props.msg}
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Ingredient;
