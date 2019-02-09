import {
  LOGIN_USER,
  LOGOUT_USER,
  LOADING,
  REGISTER_USER,
} from './types'

export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Login goes here
  dispatch({
    type: LOGIN_USER,
    payload: user,
  })
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Logout goes here
  dispatch({
    type: LOGOUT_USER,
    payload: null,
  })
}


export const registerUser = (user) => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Register goes here
  dispatch({
    type: REGISTER_USER,
    payload: user,
  })
}
