import contactTypes from "./Contact.types";

export const addUserMessage=({userID,name,email,message})=>({
    type:contactTypes.ADD_USER_MESSAGE,
    payload:{userID,name,email,message}
});


export const getUserMessage=()=>({
    type:contactTypes.GET_USER_MESSAGE,
});

export const setUserMessage=(message)=>({
    type:contactTypes.SET_USER_MESSAGE,
    payload:message
});