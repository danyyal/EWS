import userTypes from './user.types';

export const emailSignInStart = userCredentials => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
})


export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});


export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const signUpUserStart = userCredentials => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials
});

export const userError = err => ({
  type: userTypes.USER_ERROR,
  payload: err
});

export const mailError = err =>({
  type:userTypes.MAIL_ERROR,
  payload:err
});
export const resetPasswordStart = userCredentials => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredentials
});

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true
});


export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
});

export const getAllUsers =()=>({
  type:userTypes.GET_ALL_USERS
});

export const setAllUsers =(users)=>({
  type:userTypes.SET_ALL_USERS,
  payload:users
});

export const deleteUsers=userID=>({
  type:userTypes.DELETE_USERS,
  payload:userID
});

export const updateUser=(user)=>({
  type:userTypes.UPDATE_USER,
  payload:user
});

export const getUser =uid =>({
  type:userTypes.GET_USER,
  payload:uid
});

export const setUser = (user)=>({
  type:userTypes.SET_USER,
  payload:user
})