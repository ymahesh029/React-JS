import React from "react";
import "./Person.css";
const Person = (props) => {
  console.log("props", props);
  return (
    <div className="row">
      <div className="column">
        <div className="person-box">
          <span>
            <h1>{props.name}</h1>
          </span>{" "}
          <span>
            <h1>{props.age}</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person;
