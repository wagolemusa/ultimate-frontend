import React from 'react'
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = () =>{
  return async dispatch => {
    const token = localStorage.getItem('token');
    if(token){
        const user = JSON.parse(localStorage.getItem('user'));
        console.log("USER", user)
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
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);


  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};