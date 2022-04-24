import { legacy_createStore as createStore } from "redux";
//import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { INITIAL_STATE } from "./reducer";
const store = createStore(reducer, INITIAL_STATE, composeWithDevTools());

export default store;
