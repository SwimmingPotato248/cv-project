import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="form-container">
        <h3>General Info</h3>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="phone">Phone number: </label>
            <input id="phone" type="text" onChange={this.handleChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
