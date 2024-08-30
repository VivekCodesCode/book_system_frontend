// actions.js
export const depositMoney = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'deposit',
      payload: item
    });
  };
};
export const get_name = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'get_name',
      payload: item
    });
  };
};
export const user_history = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'user_history',
      payload: item
    });
  };
};
export const clear_cart = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'clear_cart',
      payload: item
    });
  };
};