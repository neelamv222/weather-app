
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Typography from '@material-ui/core/Typography';

import DayCard from './day-card';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    item: {
      date: "2020-08-16",
      avgTemp: "295.77",
      readings: [
        { dt: 1597579200, temp: 298.16 },
        { dt: 1597590000, temp: 298.53 },
        { dt: 1597600800, temp: 294.59 },
        { dt: 1597611600, temp: 291.79 }
      ]
    },
    onCardSelect: jest.fn(),
    tempUnit: 'F',
    selectedDate: null
  }

  const enzymeWrapper = shallow(<DayCard {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Collection', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find(Typography).at(1).text()).toBe(`${props.item.avgTemp}F`);
    expect(enzymeWrapper.find(Typography).at(3).text()).toBe(props.item.date);
  });
});
