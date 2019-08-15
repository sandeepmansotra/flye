import React, { Component } from "react";
import SearchBank from "./SearchBank";
import "../styles/index.css";
import BankList from "./BankList";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBank />
        <BankList />
      </div>
    );
  }
}

export default App;
