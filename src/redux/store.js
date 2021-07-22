import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducer/userReducer";
import { articleReducer } from "../redux/reducer/articleReducer";
const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

const middleware = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
