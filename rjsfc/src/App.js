import React, { Component } from "react";
import "./App.css";
import PersonM from "./Components/Person Module/Person";
import Person from "./Components/Person/Person";
// import Person from './Components/Person';
// import Person from './Components/ClassCompo'
import Withoujsx from "./Components/wjsx";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { id: 1, name: " 1", age: 11 },
        { id: 2, name: " 2", age: 12 },
        { id: 3, name: " 3", age: 13 },
        { id: 4, name: " 4", age: 14 },
        { id: 5, name: " 4", age: 14 },
        { id: 6, name: "wscube 5", age: 110 },
        { id: 7, name: "wscube 6", age: 124 },
        { id: 8, name: "wscube 7", age: 130 },
        { id: 9, name: "wscube 8", age: 148 },
        { id: 10, name: "wscube 9", age: 146 },
      ],
    };
    // buttonHandler= ()=>{

    // }
  }
  render() {
    let persons;
    persons = this.state.person.map((p, index) => {
      return <Person key={index} name={p.name} age={p.age} />;
    });

    console.log("persons", persons);
    return (
      <div className="App-header">
        app.js
        {persons}
      </div>
    );
  }
}

export default App;
