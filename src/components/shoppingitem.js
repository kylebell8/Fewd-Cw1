import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Item = ({ food }) => {


  return (
    <div>
      
      <Accordion.Header> {food.name}</Accordion.Header>
      
      <Accordion.Body>
      <p>{food.category}</p>
        <p>{food.description}</p>
        <p>{food.allergens}</p>
        
      </Accordion.Body>
</div>


); };
export default Item;