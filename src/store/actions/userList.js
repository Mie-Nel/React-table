export function fetchUsers() {
  return dispatch => {
    dispatch(fetchStart());

    fetch(
      "http://www.filltext.com/?rows=200&pretty=true&fname={firstName}&lname={lastName}&company={business}&email={email}&city={city}"
    )
      .then(response => {
        const data = response.json();
        return data;
      })
      .then(data => {
        dispatch(fetchSuccess(data));
      })
      .catch(error => {
        dispatch(fetchFailed(error));
      });
  };
}

export function fetchStart() {
  return {
    type: "FETCH_START"
  };
}

export function fetchSuccess(data) {
  return {
    type: "FETCH_SUCCESS",
    data
  };
}

export function fetchFailed(error) {
  return {
    type: "FETCH_FAILED",
    error
  };
}

export function onClickUser(item) {
  return {
    type: "USER_ITEM_CLICK",
    item
  };
}

export function onClickSortButton() {
  return {
    type: "SORTING"
  };
}
