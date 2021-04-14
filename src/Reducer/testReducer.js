const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_ACTION": {
      return { ...state, data: [...state.data, ...action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;
