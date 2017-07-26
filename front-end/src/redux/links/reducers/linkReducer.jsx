import { Map, Set } from 'immutable'

import Link from 'models/Link'

import { GET_ALL_LINKS } from '../actions/getLinks'

const initialState = {
  byId: Map(),
  allIds: Set(),
}

const reduceLinks = (state, { data }) => (
  {
    allIds: state.allIds.concat(data.map(i => i.code)),
    byId: state.byId.merge(data.reduce((object, link) =>
            object.set(link.code, new Link(link))
          , Map()))
  }
)

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LINKS:
      return reduceLinks(state, action)

    default:
      return state
  }
}

export default linksReducer
