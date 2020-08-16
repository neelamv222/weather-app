import axios from 'axios';
import { WEATHER_API_URL } from "../constants/common-constants";

// asyc call to fetch weather data.
export const getWeatherData = () => {
  const url = WEATHER_API_URL;
  return axios.get(url);
};
