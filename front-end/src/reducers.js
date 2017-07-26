import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import links from 'redux/links/reducers'

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  links,
})
