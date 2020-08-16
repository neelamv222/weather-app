import React from 'react';
import moment from 'moment';
import { object, func, string } from "prop-types";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './weather-cards.css';

const DayCard = ({ item, onCardSelect, tempUnit, selectedDate }) => {
  return (
    <Grid item xs={4} md={4} lg={4} sm={4}>
      <Card className={selectedDate === item.date ? 'card__selected' : ''} onClick={onCardSelect(item.date)}>
        <CardContent>
          <Typography className="card__title" color="textSecondary" gutterBottom>
            Temp:
          </Typography>
          <Typography variant="body2" component="p">
            {`${item.avgTemp} ${tempUnit}`}
          </Typography>
          <Typography className="card__title" color="textSecondary">
            Date:
          </Typography>
          <Typography variant="body2" component="p">
            {
              moment(item.date).format('DD MMM YY')
            }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

DayCard.propTypes = {
  item: object,
  onCardSelect: func,
  tempUnit: string,
  selectedDate: string
};

export default DayCard;
