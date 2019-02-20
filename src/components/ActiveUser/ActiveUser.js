import React from "react";
import { connect } from "react-redux";
import classes from "./ActiveUser.module.css";

const ActiveUser = props => {
  const { userItem } = props;

  return (
    <div className={classes.ActiveUser}>
      {!userItem ? (
        <p>Choose user...</p>
      ) : (
        <div>
          <h2>User Info</h2>
          <p>First name: {userItem.fname}</p>
          <p>Last name: {userItem.lname}</p>
          <p>Company: {userItem.company}</p>
          <p>Email: {userItem.email}</p>
          <p>City: {userItem.city}</p>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userItem: state.userList.userItem
  };
}

export default connect(
  mapStateToProps,
  null
)(ActiveUser);
