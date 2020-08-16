import React, { useState, useEffect, useCallback } from 'react';
import { array, string } from "prop-types";
import { map, find } from 'lodash';
import Grid from '@material-ui/core/Grid';

import DayCard from './day-card';
import Pagination from "../../common/common-components/pagination";
import BarChart from "../../common/common-components/bar-chart";
import usePagination from "../../common/hooks/pagination-hook";

import './weather-cards.css';

const DayCards = ({ items, tempUnit }) => {
  const { next, previous, currentPageData, currentPage, maxPage } = usePagination(items, 3, tempUnit);
  const currentItems = currentPageData();
  const [selectedReadings, setSelectedReadings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const selectedData = find(currentItems, (data) => data.date === selectedDate) || {};
    setSelectedReadings(selectedData.readings);
  }, [tempUnit]);

  const handleCardClick = useCallback((selectedDate) => () => {
    const selectedData = find(currentItems, (data) => data.date === selectedDate);
    setSelectedReadings(selectedData.readings);
    setSelectedDate(selectedData.date)
  }, [selectedDate, currentItems]);

  return (
    <>
      <Pagination
        next={next}
        previous={previous}
        currentPage={currentPage}
        maxPage={maxPage}
      />
      <Grid container spacing={3}>
        {
          map(currentItems, (item) => (
            <DayCard
              key={item.date}
              item={item}
              onCardSelect={handleCardClick}
              selectedDate={selectedDate}
              tempUnit={tempUnit}
            />
          ))
        }
      </Grid>
      {selectedReadings && selectedReadings.length > 0 && <BarChart readings={selectedReadings} />}
    </>
  );
}

DayCards.propTypes = {
  items: array,
  tempUnit: string
};

export default DayCards;
