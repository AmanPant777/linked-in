import db, { auth, provider, storage } from "../../firebase";

const setUser = (payload) => ({
  type: "SET_USER",
  user: payload,
});

const setLoading = (status) => ({
  type: "SET_LOADING_STATUS",
  status: status,
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
export const signOutApi = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.log(error.message));
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress:${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress:${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
      dispatch(setLoading(false));
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
};
