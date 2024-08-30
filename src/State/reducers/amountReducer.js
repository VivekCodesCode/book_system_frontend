const initialState = {
  firstArray: [],
  secondArray:[],
  user_history:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'deposit':
      return {
        ...state,
        firstArray: [...state.firstArray, action.payload]
      };
      case 'get_name':
      return {
        ...state,
        secondArray: [...state.secondArray, action.payload]
      };
      case 'user_history':
        console.log(action.payload)
      return {
        ...state,
        user_history: [...state.user_history, action.payload]
      };
      case 'clear_cart':
        console.log(action.payload)
      return {
        ...state,
        firstArray: []
      };
    default:
      return state;
  }
};

export default reducer;
