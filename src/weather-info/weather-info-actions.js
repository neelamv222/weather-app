import {get} from 'lodash';

import { getWeatherData } from "./weather-info-services";
import { WEATHER_DATA_FETCH_COMPLETED, SET_TEMP_UNIT } from "../constants/common-constants";
import { parseResponse } from "../common/helpers/common-helpers";

export const fetchWeatherData = () => async (dispatch) => {
  let response;
  try {
    response = await getWeatherData();

  } catch (error) {
    response = get(error, 'response');
  }
  dispatch({
    type: WEATHER_DATA_FETCH_COMPLETED,
    payload: parseResponse(response)
  })
};
export const setTempUnit = (payload) => {
  return {
    type: SET_TEMP_UNIT,
    payload
  }
}