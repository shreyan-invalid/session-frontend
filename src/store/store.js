import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

const preloadedState= () => (
  createStore(
    reducer, 
    preloadedState, 
    applyMiddleware(thunk)
  )
);


export default preloadedState;