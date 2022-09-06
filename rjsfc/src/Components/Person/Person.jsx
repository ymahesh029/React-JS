import React from "react";
import "./Person.css";
const Person = (props) => {
  console.log("props", props);
  return (
    <div className="row">
      <div className="column">
        <div className="person-box">
          <h1 onClick={props.remove}>{props.index} remove</h1>
          <h1>{props.name}</h1>

          <h1>{props.age}</h1>
        </div>
      </div>
    </div>
  );
};

export default Person;
