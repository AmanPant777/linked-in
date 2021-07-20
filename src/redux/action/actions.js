import { auth, provider } from "../../firebase";

const setUser = (payload) => ({
  type: "SET_USER",
  user: payload,
});

export const signInApi = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload)))
      .catch((error) => alert(error.message));
  };
};
export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};
