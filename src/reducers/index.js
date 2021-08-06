import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";

/* 
In the app state whatever is the variable name that is the name 
of the key here in the combineReducer.
*/
export default combineReducers({
  newsData: newsReducer,
});
