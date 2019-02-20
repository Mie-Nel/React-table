const initialState = {
  users: [],
  isLoading: false,
  error: null,
  errorMessage: null,
  userItem: null,
  sorting: false
};

export default function userListReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        users: action.data,
        isLoading: false
      };
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
        error: true
      };
    case "USER_ITEM_CLICK":
      return {
        ...state,
        userItem: action.item
      };
    case "SORTING":
      return {
        ...state,
        sorting: !state.sorting
      };
    default:
      return state;
  }
}
