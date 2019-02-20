import { combineReducers } from "redux";
import userListReducer from "./userListReducer";
import searchReducer from "./searchReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  userList: userListReducer,
  search: searchReducer,
  pagination: paginationReducer
});
