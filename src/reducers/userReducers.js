import { userContants } from "../actions/constants"

const initState = {
    error: null,
    message: '',
    loading: false
}

const UserReducers = (state = initState, action) => {
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userContants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userContants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        default:{
            state = {
                ...state,
            }
        }
    }
    return state
}
export default UserReducers