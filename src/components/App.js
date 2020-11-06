import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol>
          <li key="relativeListItem1"> ramesh</li>
          <li key="relativeListItem2"> amesh</li>
          <li key="relativeListItem3"> fghramesh</li>
          <li key="relativeListItem4"> framesh</li>
          <li key="relativeListItem5"> ddramesh</li>
        </ol>
      </div>
    );
  }
}

export default App;
