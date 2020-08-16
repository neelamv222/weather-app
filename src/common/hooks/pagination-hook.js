// eslint-disable-next-line 
import React, { useState } from "react"; 
import {map} from 'lodash';
import { convertToCelcius } from "../helpers/common-helpers";

const usePagination = (data=[], itemsPerPage, tempUnit) => {
   const [currentPage, setCurrentPage] = useState(1);
   const maxPage = Math.ceil(data.length / itemsPerPage);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function previous() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function currentPageData() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (tempUnit === 'C') {
      const convertedData = map(data, (item) => {
        return {
          ...item, 
          avgTemp: convertToCelcius(item.avgTemp), 
          readings: map(item.readings, (innerItem) => (
            {...innerItem, temp: convertToCelcius(innerItem.temp)
            })
          )
        }
      }
    );
      return convertedData.slice(startIndex, endIndex) || [];
    }
    return (data && data.slice(startIndex, endIndex)) || [];
  }

  return { next, previous, currentPage, maxPage, currentPageData };
 }

 export default usePagination;
 