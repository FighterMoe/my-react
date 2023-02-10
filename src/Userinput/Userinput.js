import React from "react";
import "./Userinput.css";

const userinput = (prop) => (
  <input className="Userinput" onChange={prop.change} type="text" value={prop.name} />
);

export default userinput;