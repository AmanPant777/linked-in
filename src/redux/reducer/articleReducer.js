const InitialState = {
  loading: false,
};
export const articleReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_LOADING_STATUS":
      return {
        ...state,
        loading: action.status,
      };

    default:
      return state;
  }
};
