import React from "react";
import Reciepe from "./Reciepe";

export default function ReciepeList({ recipies }) {
  return (
    <>
      <div className='recipe-list'>
        <div>
          {recipies.map((recipe) => {
            return <Reciepe key={recipe.id} {...recipe} />;
          })}
        </div>
        <div className='recipe-list__add-recipe-btn-container'>
          <button className='btn btn--primary'>Add Recipe</button>
        </div>
      </div>
    </>
  );
}
