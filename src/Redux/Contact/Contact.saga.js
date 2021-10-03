import contactTypes from "./Contact.types";
import { takeLatest, all, call,put} from 'redux-saga/effects';
import {handleAddMessage,handleGetMessage} from './Contact.helper';
import {setUserMessage} from './Contact.actions';


export function* addUserMessage({payload}){
    try{
   yield handleAddMessage({
       ...payload,
       createdDate : new Date()
   });
    }
    catch(err){
        console.log(err);
    }
}

export function* onAddContactMessage(){
yield takeLatest(contactTypes.ADD_USER_MESSAGE,addUserMessage);
}

export function* getMessages({payload}){
    try{  
    const message= yield handleGetMessage(payload);
    yield put(setUserMessage(message));
    }
    catch(err) {
        console.log(err);
    }
}

export function* onGetContactMessage(){
    yield takeLatest(contactTypes.GET_USER_MESSAGE,getMessages);
}


export default function* ContactSagas() {
    yield all([
        call(onAddContactMessage),
        call(onGetContactMessage)
    ])
}
