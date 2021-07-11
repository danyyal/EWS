import contactTypes from "./Contact.types";
import { takeLatest, all, call} from 'redux-saga/effects';
import {handleAddMessage} from './Contact.helper';



export function* addUserMessage({payload}){
    const timestamp= new Date();
    try{
   yield handleAddMessage({
       ...payload,
     createdDate:timestamp
   });
    }
    catch(err){
        console.log(err);
    }
}

export function* onAddContactMessage(){
yield takeLatest(contactTypes.ADD_USER_MESSAGE,addUserMessage);
}

export default function* ContactSagas() {
    yield all([
        call(onAddContactMessage),
    ])
}
