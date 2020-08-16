import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SwitchTemperature from './switch-tempature';
import FormControlLabel from '@material-ui/core/FormControlLabel';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    onTempChange: jest.fn(),
    tempUnit: 'F'
  }

  return shallow(<SwitchTemperature {...props} />)
}

describe('DayCards:', () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = setup();
  });
  it('should render st__container', () => {
    const container = enzymeWrapper.find('.st__container');
    expect(container).toHaveLength(1);
  });

  it('should render two radio buttons', () => {
    const radioBtn = enzymeWrapper.find(FormControlLabel);
    console.log(radioBtn.at(1))
    expect(radioBtn).toHaveLength(2);
  });

  it('should checked F radio button by default', () => {
    const radioBtn = enzymeWrapper.find(FormControlLabel).at(1).prop('checked');
    expect(radioBtn).toBe(true);
  });

});