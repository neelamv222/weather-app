import { WEATHER_DATA_FETCH_COMPLETED, SET_TEMP_UNIT } from "../constants/common-constants";

const INITIAL_STATE = {};

function weatherInfoReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case WEATHER_DATA_FETCH_COMPLETED:
      return Object.assign({}, state,
        {
          weatherInfoResponse: payload,
          tempUnit: 'F'
        }
      );
    case SET_TEMP_UNIT:
      return Object.assign({}, state,
        {
          tempUnit: payload
        }
      );
    default:
      return state;
  }
}

export default weatherInfoReducer;
