import React, { Component } from "react";
import GeneralInfo from './components/GeneralInfo'
import EducationInfo from "./components/EducationInfo";

class App extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <GeneralInfo />
        <EducationInfo />
      </div>
    );
  }
}

export default App;
