import { combineReducers } from "redux";

//Reducers !
export const placeholderReducer = (text = "hi, change me", action) => {
  return text;
};
//

export default combineReducers({
  placeholder: placeholderReducer,
});
