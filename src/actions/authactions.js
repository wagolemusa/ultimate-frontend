import { authConstants } from "./constants";
import axios from "axios";
export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SECCESS,
                payload: {
                    token, user
                }
            });
        }else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error: 'Failed to Login'}
            });
        }
    }
}


export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST})
        const res = await axios.post(`https://ultimatebackend.herokuapp.com/users/api/signout`);
        if(res.status == 200){
            localStorage.clear();
            dispatch({type: authConstants.LOGOUT_SECCESS});
            return window.location('/')
        } else{
                dispatch({ type: authConstants.LOGIN_FAILURE,
                payload: { error: res.data.error}
            })
        }
    }
}