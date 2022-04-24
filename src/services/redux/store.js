import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { INITIAL_STATE } from "./reducer";
const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  })
const store = createStore(reducer,  INITIAL_STATE,composeEnhancers())
export default store;
