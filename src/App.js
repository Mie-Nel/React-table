import React, { Component } from "react";
import "./App.css";
import UserList from "./containers/UserList/UserList";
import ActiveUser from "./components/ActiveUser/ActiveUser";
import Search from "./containers/Search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <UserList />
        <ActiveUser />
      </div>
    );
  }
}

export default App;
