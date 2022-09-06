import React, { Component } from "react";
import styleq from "./Person.module.css";
class PersonM extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const style = {
      background: "black",
      color: "blue",
    };

    return (
      <div>
        <h1 className={styleq.demo}>class componensts</h1>
        <h1 style={style}>style </h1>
        <h1 style={{ color: "red", background: "green" }}>style </h1>
      </div>
    );
  }
}

export default PersonM;
