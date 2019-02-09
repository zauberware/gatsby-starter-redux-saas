import { combineReducers } from 'redux'
import userReducer from './userReducer'

const appReducer = combineReducers({
  user: userReducer,
})

export default function (state, action) {
  if (action.type === 'SIGNOUT_USER') {
    state = undefined // eslint-disable-line no-param-reassign
  }
  return appReducer(state, action)
}
