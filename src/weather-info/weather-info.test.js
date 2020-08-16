import React from 'react';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WeatherInfo, { mapStateToProps, mapDispatchToProps } from './weather-info';
import { stateData } from './weather-info-mock';


Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const mockStore = configureStore([thunk]);
  const props = {
    weatherInfoResponse: stateData.weatherInfo.weatherInfoResponse,
    tempUnit: 'F',
    fetchWeatherData: jest.fn(),
    setTempUnit: jest.fn()
  }
  const store = mockStore(
    {
      ...stateData
    }
  );
  const enzymeWrapper = mount(
    <Provider store={store}>
      <WeatherInfo {...props} />
    </Provider>
  );

  return {
    props,
    stateData,
    enzymeWrapper
  }
}

describe('Weather Info: ', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.length).toEqual(1);
  });

  it('should display the value from state in mapStatetoProps', () => {
    const state = {
      ...setup().stateData
    };
    expect(mapStateToProps(state).weatherInfoResponse).toEqual(stateData.weatherInfo.weatherInfoResponse);
    expect(mapStateToProps(state).tempUnit).toEqual('F');
  });

  it('should call the function in mapDispatchToProps', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchWeatherData();
    expect(dispatch.mock.calls.length).toBe(1);
    mapDispatchToProps(dispatch).setTempUnit();
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'SET_TEMP_UNIT' });
  });

  //TODO: Likewise need to write the other test cases for this component
});
