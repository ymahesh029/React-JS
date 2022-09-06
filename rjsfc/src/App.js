import React, { Component } from "react";
import "./App.css";
import PersonM from "./Components/Person Module/Person";
import Person from "./Components/Person/Person";
// import Person from './Components/Person';
// import Person from './Components/ClassCompo'
import Withoujsx from "./Components/wjsx";
import axios from "axios";
import OnkeyKeyup from "./Components/onkeyKeyup";
import Onsubmit from "./Components/onsubmit";
// import onkeyKeyup from "./Components/onkeyKeyup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
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

      isshow: true,
    };
    // buttonHandler= ()=>{

    // }
    this.togglehandeler = this.togglehandeler.bind(this);
  }
  togglehandeler() {
    this.setState({ isshow: !this.state.isshow });
    // alert();
  }
  removehandeler(peronindex) {
    // alert(peronindex);
    const personsCopy = this.state.persons;
    console.log("peronindex", peronindex);
    console.log("personsCopy 1", personsCopy);

    personsCopy.splice(peronindex, 1);
    console.log("personsCopy", personsCopy);
    this.setState({ persons: personsCopy });
  }
  render() {
    let persons;

    if (this.state.isshow) {
      persons = this.state.persons.map((p, index) => {
        return (
          <Person
            key={index}
            name={p.name}
            age={p.age}
            remove={() => this.removehandeler(index)}
          />
        );
      });
    } else {
      persons = "";
    }

    console.log("persons", persons);
    return (
      <div className="App-header">
        {/* <button onClick={this.togglehandeler}>show and hide</button>
        {/* {this.state.isshow === true ? persons : ""} 
        {persons} */}

        {/* <onsubmit /> */}
        {/* <OnkeyKeyup /> */}
        <Onsubmit />
      </div>
    );
  }
}

export default App;
