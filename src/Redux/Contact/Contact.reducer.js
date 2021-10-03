import contactTypes from './Contact.types';

const INITIAL_STATE = {
    messages: []
};

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case contactTypes.SET_USER_MESSAGE:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state;
    }
}

export default contactReducer;