import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import FlUserReducer from "./reducers/freelancersReducers/userReducer";
import ClUserReducer from "./reducers/clientsReducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/freelancersReducers/userReducer";

// const initialState = {};
const middleware = [thunk];

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

// flUser: FlUserReducer,
// clUser: ClUserReducer,

const reducers = combineReducers({
  User: userReducer,
  UI: uiReducer,
});

const store = createStore(
  reducers,
  persistedState,

  compose(
    applyMiddleware(...middleware)
    //This is what allows us to use the extension
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//?//It is what is done after dispatch
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
