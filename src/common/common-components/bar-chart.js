
import React from "react";
import { array, string } from "prop-types";
import Grid from '@material-ui/core/Grid';
import Chart from "react-apexcharts";

import { barChartConfigurations } from "../helpers/chart-configurations";

import "./bar-chart.css";

const BarChart = ({ readings, tempUnit }) => {
  const { options, series } = barChartConfigurations(readings, tempUnit);
  return (
    <Grid className="bc__container">
      <Grid item xs={12} md={12} lg={6} sm={12}>
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      </Grid>
    </Grid>
  );
}

BarChart.propTypes = {
  readings: array.isRequired,
  tempUnit: string
};

export default BarChart;