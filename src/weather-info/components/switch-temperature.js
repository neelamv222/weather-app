import React from 'react';
import { array, string } from "prop-types";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './switch-temperature.css';

const SwitchTemperature = ({ onTempChange, tempUnit }) => {
  return (
    <Grid container>
      <FormControl component="fieldset" className="st__container">
        <FormLabel component="legend">Select Temperature Unit: </FormLabel>
        <RadioGroup className="st__radio-group" aria-label="temperature" name="temperature" onChange={onTempChange}>
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="Celcius"
          />
          <FormControlLabel
            value="F"
            control={<Radio />}
            label="Fahrenheit"
            checked={tempUnit === 'F'}
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

SwitchTemperature.propTypes = {
  items: array,
  tempUnit: string
};

export default SwitchTemperature;
