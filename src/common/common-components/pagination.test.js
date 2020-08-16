
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "@material-ui/core/Button";

import Pagination from './pagination';

Enzyme.configure({ adapter: new Adapter() })

function setup(mockedFunc) {
  const props = {
    next: mockedFunc,
    previous: mockedFunc,
    currentPage: 1,
    maxPage: 2
  }
  return shallow(<Pagination {...props} />)
}

describe('Pagination', () => {
  let mockedFunc = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = setup(mockedFunc);
  });

  it('should render pagination__container element', () => {
    expect(wrapper.find('.pagination__container')).toHaveLength(1);
  });

  it('should render both the buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should pass appropriate props to left button', () => {
    const button = wrapper.find(Button).at(0);
    expect(button.prop('color')).toEqual('secondary');
    expect(button.prop('variant')).toEqual('contained');
    expect(button.prop('disabled')).toEqual(true);
    expect(button.prop('onClick')).toEqual(mockedFunc);
  });

  it('should pass appropriate props to right button', () => {
    const button = wrapper.find(Button).at(1);
    expect(button.prop('color')).toEqual('primary');
    expect(button.prop('variant')).toEqual('contained');
    expect(button.prop('disabled')).toEqual(false);
    expect(button.prop('onClick')).toEqual(mockedFunc);
  });
});
