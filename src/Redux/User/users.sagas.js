import userTypes from './user.types';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { signInSuccess, signOutUserSuccess, resetPasswordSuccess, userError,
     mailError, setAllUsers,getAllUsers,setUser,getUser} from './user.actions'
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from '../../Firebase/utils';
import { handleGetAllUsers, handleResetPasswordAPI,handleDeleteUser, handleUpdateUser,
    handleFetchSingleUser } from './user.helpers'
import { ToastsStore } from 'react-toasts';




export function* getSnapShotFromUserAuth(user, additionalData = {}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {
        //console.log(err)
    }
}
export function* emailSignIn({ payload: { email, password } }) {


    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
        ToastsStore.success("Successfully Logged In")
    } catch (error) {
        yield put(mailError(error.message));
    }

}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    } catch (err) {
        //console.log(err);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(signOutUserSuccess())
        ToastsStore.success("Successfully logged out");

    } catch (err) {
        console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
    payload: {
        displayName,
        email,
        password,
        confirmationPassword,
        userRoles
    }
}) {
    if (password !== confirmationPassword) {
        const err = ['Password Don\'t match'];
        yield put(
            userError(err),
        );
        return;
    }

    if (password.length < 6) {
        const err = ['Password must be atleast 6 characters'];
        yield put(
            userError(err)
        );
        return;
    }
    if (password.length > 5 || (password === confirmationPassword)) {
        const err = [];
        yield put(
            userError(err)
        );
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData = { displayName, userRoles }
        yield getSnapShotFromUserAuth(user, additionalData)

        //yield call(handleUserProfile, { authUser: user, additionalData: { displayName } });
    } catch (error) {
        yield put(mailError(error.message));
    }


}
export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);

}

export function* resetPassword({ payload: { email } }) {
    try {
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        )
    } catch (err) {
        yield put(
            userError(err)
        )
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)
}


export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapShotFromUserAuth(user)

    } catch (error) {
        // console.log(error);
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}


export function* getUsers(){
    try{
const users =yield handleGetAllUsers();
yield put(setAllUsers(users));
    }
    catch(err){
        console.log(err);
    }
}

export function* onGetAllUsers (){
    yield takeLatest(userTypes.GET_ALL_USERS,getUsers);
}


export function* deleteUser({payload}){
    try{
yield handleDeleteUser(payload);
yield put(getAllUsers());
    }
    catch(err){
// console.log(err);
    }
}


export function* onDeleteUser(){
    yield takeLatest(userTypes.DELETE_USERS,deleteUser);
}

export function* updateUser({payload}){
    try {
        const timestamp = new Date();
       yield handleUpdateUser({
            ...payload,
            updated_at: timestamp
        })
    yield put(getUser(auth.currentUser.uid));
    } catch (err) {
        // console.log(err);
    }
}


export function* onUpdateUser(){
    yield takeLatest(userTypes.UPDATE_USER,updateUser);
}

export function* fetchSignleUser({payload}){
    try {
        const user = yield handleFetchSingleUser(payload);
        yield put(setUser(user));
    } catch (err) {
        //  console.log(err);
    }
}

export function* onFetchSingleUser(){
    yield takeLatest(userTypes.GET_USER,fetchSignleUser)
}


export default function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGoogleSignInStart),
        call(onGetAllUsers),
        call(onDeleteUser),
        call(onUpdateUser),
        call(onFetchSingleUser),
    ])
}