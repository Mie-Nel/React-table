import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  onClickUser,
  onClickSortButton
} from "../../store/actions/userList";
import UserData from "../../components/UserData/UserData";
import { Loader } from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { onClickPage } from "../../store/actions/pagination";
import classes from "./UserList.module.css";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const {
      users,
      isLoading,
      error,
      value,
      usersPerPage,
      currentPage,
      sorting
    } = this.props;

    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;

    const currentUsers = users.slice(firstIndex, lastIndex);

    const sort = currentUsers.slice().sort((a, b) => {
      return a.fname > b.fname;
    });

    let data = [];

    sorting ? (data = sort) : (data = currentUsers);

    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>Something went wrong...</p>
        ) : (
          <table className={classes.UserList}>
            <thead>
              <tr>
                <th>
                  First name
                  <button onClick={this.props.onClickSortButton}>Sort</button>
                </th>
                <th>Last name</th>
                <th>Company</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const name = item.fname.toLowerCase();

                if (name.indexOf(value) === -1) {
                  return null;
                } else {
                  return (
                    <UserData
                      key={index}
                      fName={item.fname}
                      lName={item.lname}
                      company={item.company}
                      email={item.email}
                      city={item.city}
                      onClickUser={() => this.props.onClickUser(item)}
                    />
                  );
                }
              })}
            </tbody>
          </table>
        )}
        <Pagination
          users={this.props.users}
          usersPerPage={this.props.usersPerPage}
          onClickPage={evt => this.props.onClickPage(evt.target.id)}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userList.users,
    isLoading: state.userList.isLoading,
    error: state.userList.error,
    value: state.search.value,
    usersPerPage: state.pagination.usersPerPage,
    currentPage: state.pagination.currentPage,
    sorting: state.userList.sorting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    onClickUser: item => {
      dispatch(onClickUser(item));
    },
    onClickPage: item => {
      dispatch(onClickPage(item));
    },
    onClickSortButton: () => {
      dispatch(onClickSortButton());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
