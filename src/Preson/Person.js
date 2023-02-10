import React from "react";
import "./Person.css";

const person = (prop) => (
  <div className="Person">
    <p onClick={prop.delete} >My name is {prop.name}. And I am {prop.age} years old.</p>
    <input type="text" onChange={prop.nameChange} value={prop.name}/>
  </div>
  );

export default person;