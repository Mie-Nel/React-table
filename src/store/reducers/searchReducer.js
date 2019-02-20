const initialState = {
  value: ""
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_VALUE_INPUT":
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
}
