import userTypes from './user.types';


const INITIAL_STATE = {
    currentUser: null,
    resetPasswordSuccess: false,
    userErr: [],
    MailError:'',
    users:[],
};

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: [],
                MailError:''
            }
        case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload
            }
        case userTypes.MAIL_ERROR:
            return {
                ...state,
                MailError: action.payload
            }
        case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }

            case userTypes.SET_ALL_USERS:
                return {
                    ...state,
                    users:action.payload
                }
    
        default:
            return state;
    }
}
export default UserReducer;