import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import LinksDashboardContainer from '../../containers/LinksDashboard'

it('LinksDashboardContainer renders correctly', () => {
  const shallowComponent = shallow(<LinksDashboardContainer />)

  expect(toJson(shallowComponent)).toMatchSnapshot()
})
