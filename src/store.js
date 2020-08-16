import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import weatherInfoReducer from "./weather-info/weather-info-reducers";

const allReducers = combineReducers({
    weatherInfo: weatherInfoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
