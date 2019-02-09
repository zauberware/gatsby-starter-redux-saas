import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

const initialState = {
  user: {},
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}
