import { Map, OrderedSet } from 'immutable'

import Link from 'models/Link'

import { GET_ALL_LINKS } from '../actions/getLinks'
import { ADD_LINK } from '../actions/addLink'
import { DELETE_LINK } from '../actions/deleteLink'

const initialState = {
  allIds: OrderedSet(),
  byId: Map(),
}

const reduceLinks = (state, { data }) => (
  {
    allIds: OrderedSet(data.map(i => i.code)),
    byId: state.byId.merge(data.reduce((object, link) =>
            object.set(link.code, new Link(link))
          , Map()))
  }
)

const addLink = (state, { data }) => (
  {
    allIds: OrderedSet([data.code, ...state.allIds]),
    byId: state.byId.merge(Map().set(data.code, new Link(data)))
  }
)

const deleteLink = (state, { code }) => (
  {
    allIds: state.allIds.delete(code),
    byId: state.byId.delete(code)
  }
)

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LINKS:
      return reduceLinks(state, action)

    case ADD_LINK:
      return addLink(state, action)

    case DELETE_LINK:
      return deleteLink(state, action)

    default:
      return state
  }
}

export default linksReducer
