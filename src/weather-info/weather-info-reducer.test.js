import reducer from './weather-info-reducers';
import { WEATHER_DATA_FETCH_COMPLETED, SET_TEMP_UNIT } from '../constants/common-constants';
import { data } from './weather-info-mock';
import { parseResponse } from "../common/helpers/common-helpers";

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle WEATHER_DATA_FETCH_COMPLETED', () => {
    const payload = parseResponse({ status: 200, data });
    const expected = {
      weatherInfoResponse: payload,
      tempUnit: 'F'
    }
    expect(reducer({}, { type: WEATHER_DATA_FETCH_COMPLETED, payload })).toEqual(expected);
  });

  it('should handle WEATHER_DATA_FETCH_COMPLETED', () => {
    const payload = 'C';
    const expected = {
      tempUnit: 'C'
    }
    expect(reducer({}, { type: SET_TEMP_UNIT, payload })).toEqual(expected);
  });
});