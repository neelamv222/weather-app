import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DayCards from './day-cards';
import Pagination from "../../common/common-components/pagination";
import DayCard from '../components/day-card';
import { items } from './day-cards-mock.js';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    items,
    tempUnit: 'F'
  }

  const enzymeWrapper = shallow(<DayCards {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('DayCards:', () => {
  it('should render Pagination component and pass correct props to it', () => {
    const { enzymeWrapper } = setup();
    const pagination = enzymeWrapper.find(Pagination);
    expect(pagination.props().maxPage).toEqual(1);
    expect(pagination.props().currentPage).toEqual(1);
  });

  it('should render DayCard component as per the items length', () => {
    const { enzymeWrapper, props } = setup();
    const dayCard = enzymeWrapper.find(DayCard);
    expect(dayCard).toHaveLength(props.items.length);
  });

});