import { Map, Set } from 'immutable'

import { GET_ALL_LINKS } from '../actions/getLinks'

const initialState = {
  byId: Map(),
  allIds: Set(),
}

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LINKS:
      console.log(action.data)
      return state

    default:
      return state
  }
}

export default linksReducer
