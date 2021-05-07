import React from "react";
import "./App.css";
import ReciepeList from "./ReciepeList";

function App() {
  return (
    <div>
      <ReciepeList recipies={SAMPLE_RECIPIES} />
    </div>
  );
}

const SAMPLE_RECIPIES = [
  {
    id: 1,
    name: "Reciepe 1",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Instruction 1\n 2. Instruction 2\n 3. Instruction 3",
    ingridients: [
      {
        id: 1,
        name: "Ingredient 1: ",
        amount: "2 tbs ",
      },
      {
        id: 2,
        name: "Ingredient 2: ",
        amount: "1 pound ",
      },
    ],
  },
  {
    id: 2,
    name: "Reciepe 2",
    servings: 4,
    cookTime: "1:30",
    instructions: "1. Instruction 1\n 2. Instruction 2\n 3. Instruction 3",
    ingridients: [
      {
        id: 1,
        name: "Ingredient 1: ",
        amount: "2 tbs ",
      },
      {
        id: 2,
        name: "Ingredient 2: ",
        amount: "1 pound ",
      },
    ],
  },
];

export default App;
