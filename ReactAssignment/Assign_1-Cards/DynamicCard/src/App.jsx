import React from "react";
import Card from "./components/Card";
import { gamingInventory } from "./assets/assets";

const App = () => {
  return (
    <div className="cardContainer">
      {gamingInventory.map((product, idx) => {
        return <Card props={product} />;
      })}
    </div>
  );
};

export default App;
