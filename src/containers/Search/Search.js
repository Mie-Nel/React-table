import React, { Component } from "react";
import { connect } from "react-redux";
import { updateValueInput } from "../../store/actions/search";
import classes from "./Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={classes.Search}>
        <input
          type="text"
          value={this.props.value}
          placeholder="type name..."
          onChange={evt => this.props.updateValueInput(evt.target.value)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.search.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateValueInput: value => {
      dispatch(updateValueInput(value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
