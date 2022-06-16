import React, { Component } from "react";

class EducationInfo extends Component {
  constructor() {
    super();

    this.state = {
      school: '',
      title: '',
      dateStudy: ''
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
        <h3>Education Info</h3>
        <form >
          <div>
            <label htmlFor="school">School name:</label>
            <input id="school" type="text" onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="title">Title of study:</label>
            <select name="title" id="title" onChange={this.handleChange}>
              <option value="High school">High school</option>
              <option value="Bachelor's degree">Bachelor's degree</option>
              <option value="Master's degree">Master's degree</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateStudy">Date of study:</label>
            <input id="dateStudy" type="date" onChange={this.handleChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationInfo;
