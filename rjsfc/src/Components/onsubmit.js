import React, { Component } from "react";

class Onsubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
    };
  }

  // namechangehandler = (e) => {
  //   console.log("name", e.target.value);
  // };
  // changehandler(e) {
  //   console.log("city", e.target.value);
  // }
  submitHandler = (e) => {
    e.preventdefault();
    console.log(this.state);
    const name = e.target.name.value;
    const city = e.target.city.value;
    this.setState({ name, city }, () => {
      console.log(this.state);
    });
  };
  render() {
    return (
      <div className="demo">
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>city</label>

            <select name="city">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Onsubmit;
