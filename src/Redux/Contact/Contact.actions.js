import contactTypes from "./Contact.types";

export const addUserMessage=({userID,name,email,message})=>({
    type:contactTypes.ADD_USER_MESSAGE,
    payload:{userID,name,email,message}
});