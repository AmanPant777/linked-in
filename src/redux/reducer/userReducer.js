const InitialState = {
  user: null,
};
export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
