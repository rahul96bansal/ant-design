import { ADD_USER, convertFieldTypeToKey, fieldType} from "./actions";
import { combineReducers } from "redux";

function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          name: action.user.name,
          email: action.user.email,
          age: action.user.age,
          address: action.user.address,
        },
      ];
    default:
      return state;
  }
}

let initialState = {
  name:"", 
  email:"", 
  age: null, 
  address: "",
}

function user(state = initialState, action) {
  switch (action.type) {
    case fieldType.UPDATE_NAME:
      return {
        ...state,
        name: action.value,
      };
    case fieldType.UPDATE_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case fieldType.UPDATE_AGE:
      return {
        ...state,
        age: action.value,
      };
    case fieldType.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.value,
      };
    default:
      return state;
  }
}

const myApp = combineReducers({
  users,
  user,
});

export default myApp;
