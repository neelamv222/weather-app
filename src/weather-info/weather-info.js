import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { string, object } from "prop-types";
import { get } from 'lodash';
import Container from '@material-ui/core/Container';

import DayCards from "./components/day-cards";
import SwitchTemperature from "./components/switch-tempature";
import withLoader from '../common/common-components/loader';
import Header from './components/header';
import ErrorMessageBox from '../common/common-components/error-message-box';

import { fetchWeatherData, setTempUnit } from "./weather-info-actions";

// HOC Component
const ContainerWithLoader = withLoader(Container);

class WeatherInfo extends Component {

  static propTypes = {
    weatherInfoResponse: object,
    tempUnit: string
  };

  componentDidMount() {
    this.props.fetchWeatherData();
  }

  // On handleTempChange, dispatch the action to change the temperature unit.
  handleTempChange = (e) => {
    this.props.setTempUnit(e.target.value);
  }

  render() {
    const { weatherInfoResponse = {}, tempUnit } = this.props;

    return (
      <>
        <Header />
        {
          weatherInfoResponse.type === 'error' ?
            <ErrorMessageBox
              error={weatherInfoResponse.data}
            /> :
            <ContainerWithLoader isLoading={!!get(weatherInfoResponse, 'data.length')}>

              <SwitchTemperature
                tempUnit={tempUnit}
                onTempChange={this.handleTempChange}
              />
              <DayCards
                items={get(weatherInfoResponse, 'data')}
                tempUnit={tempUnit}
              />
            </ContainerWithLoader>

        }
      </>
    );
  }
}

export const mapStateToProps = (state) => (
  {
    weatherInfoResponse: state.weatherInfo.weatherInfoResponse,
    tempUnit: state.weatherInfo.tempUnit
  }
);


export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchWeatherData, setTempUnit }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
