const initialState = {
  usersPerPage: 10,
  currentPage: 1
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.item
      };
    default:
      return state;
  }
}
