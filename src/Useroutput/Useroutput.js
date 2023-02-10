import React from "react";
import "./Useroutput.css";

const useroutput = (prop) => (
  <div className="Useroutput">
    <h2>Dynamic Useroutput</h2>
    <p>My name is {prop.name}</p>
  </div>
);

export default useroutput;