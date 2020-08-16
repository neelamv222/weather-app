import * as actions from './weather-info-actions';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import { SET_TEMP_UNIT } from '../constants/common-constants';
import { data } from './weather-info-mock';
import { parseResponse } from "../common/helpers/common-helpers";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('get the weather data using fetchWeatherData async action call Success Case', async (done) => {
    const mockData = {
      status: 200,
      response: {
        list: [...data.list]
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockData)
    });

    const expectedActions = [{ type: "WEATHER_DATA_FETCH_COMPLETED", payload: parseResponse({ status: 200, data }) }];
    const store = mockStore({});
    await store.dispatch(actions.fetchWeatherData())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  }, 300000);

  it('get the data using fetchWeatherData async action call Fail Case', async (done) => {
    const response = 'error message';
    const mockError = error => ({ status: 500, response: { error, status: 500 } });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500, response })
    });
    const expectedActions = [{ type: "WEATHER_DATA_FETCH_COMPLETED", payload: parseResponse({ status: 500, response }) }];

    const store = mockStore({});
    await store.dispatch(actions.fetchWeatherData())
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
        expect(store.getActions()[0].payload.type).toEqual('error');
      });
    done();
  });
});

describe('actions', () => {
  it('should create an action for random rating button click', () => {
    const expectedAction = {
      type: SET_TEMP_UNIT,
      payload: 'C'
    }
    expect(actions.setTempUnit('C')).toEqual(expectedAction);
  });
});