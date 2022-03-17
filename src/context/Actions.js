export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const UpdateFailure = () =>({
    type: "UPDATE_FAILURE"
})


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                // type: authConstants.LOGIN_SECCESS,
                payload: {
                    token, user
                }
            });
        }else {
            dispatch({
                // type: authConstants.LOGIN_FAILURE,
                payload: {error: 'Failed to Login'}
            });
        }
    }
}