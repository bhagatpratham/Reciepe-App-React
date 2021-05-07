import React from "react";
import Ingredient from "./Ingredient";

export default function IngridientList({ ingridients }) {
  const IngridientsList = ingridients.map((ingridient) => {
    return <Ingredient key={ingridient.id} {...ingridient} />;
  });
  return <div className='ingridient-grid'>{IngridientsList}</div>;
}
