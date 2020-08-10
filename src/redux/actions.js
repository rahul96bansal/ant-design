export const ADD_USER = "ADD_USER";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_AGE = "UPDATE_AGE";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";

let nextTodoId = 0;

export const addUser = (user) => ({
  type: ADD_USER,
  id: nextTodoId++,
  user,
});

export const updateField = (fieldType, value) => ({
    type: fieldType, 
    value,
})

export const fieldType = {
    UPDATE_NAME: UPDATE_NAME, 
    UPDATE_EMAIL: UPDATE_EMAIL,
    UPDATE_AGE: UPDATE_AGE,
    UPDATE_ADDRESS: UPDATE_ADDRESS,
}

export const convertFieldTypeToKey = {
    UPDATE_NAME: "name", 
    UPDATE_EMAIL: "email",
    UPDATE_AGE: "age",
    UPDATE_ADDRESS: "address",
}
