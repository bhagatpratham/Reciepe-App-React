import React from "react";
import IngridientList from "./IngridientList";

export default function Reciepe(props) {
  const { name, cookTime, servings, instructions, ingridients } = props;

  return (
    <div className='recipe'>
      <div className='header'>
        <h3 className='recipe__title'>{name}</h3>
        <div className='buttons'>
          <button className='btn btn--primary mr-1'>Edit</button>
          <button className='btn btn--danger'>Delete</button>
        </div>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Cook Time: </span>
        <span className='recipe__value'>{cookTime}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Servings: </span>
        <span className='recipe__value'>{servings}</span>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Instructions: </span>
        <div className='recipe__value recipe__instructions recipe__value--indented'>
          {instructions}
        </div>
      </div>
      <div className='recipe__row'>
        <span className='recipe__label'>Ingredients: </span>
        <div className='recipe__value recipe__value--indented'>
          <IngridientList ingridients={ingridients} />
        </div>
      </div>
    </div>
  );
}
