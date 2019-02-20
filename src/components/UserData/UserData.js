import React, { Component } from "react";

class UserData extends Component {
  render() {
    return (
      <React.Fragment>
        <tr onClick={this.props.onClickUser}>
          <td>{this.props.fName}</td>
          <td>{this.props.lName}</td>
          <td>{this.props.company}</td>
          <td>{this.props.email}</td>
          <td>{this.props.city}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default UserData;
