import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import FetchNutrition from "./FetchNutrition";

const Item = ({ food }) => {
  return (
    <div>
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <p>{food.description}</p>
        <p>{food.price}</p>
        <div className="col-6"><FetchNutrition query={food.name} /></div>
      </Accordion.Body>
    </div>
  );
};
export default Item;
