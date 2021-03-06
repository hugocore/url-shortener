import { Record } from 'immutable'

const linkObject = {
  code: '',
  url: '',
  short_url: '',
  clicks: 0,
}

const LinkRecord = Record(linkObject)

class Link extends LinkRecord {}

export default Link
