import React, { Component } from "react";

class OnkeyKeyup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  namechangehandler = (e) => {
    console.log("name", e.target.value);
  };
  changehandler(e) {
    console.log("city", e.target.value);
  }
  render() {
    return (
      <div className="demo">
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="classdemo"
              onKeyUp={this.namechangehandler}
            />
          </div>
          <div>
            <label>city</label>

            <select onChange={this.changehandler}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    );
  }
}

export default OnkeyKeyup;
