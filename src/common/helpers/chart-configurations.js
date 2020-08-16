import {map, minBy, maxBy, get, floor} from 'lodash';

export const barChartConfigurations = (data) => {
    const min = floor(get(minBy(data, (item) => item.temp), 'temp')/10)*10;
    const max = get(maxBy(data, (item) => item.temp), 'temp');

    const options= {
      plotOptions: {
        columnWidth: '10%'
      },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        labels: {
          show: false
        },
        categories: map(data, (item) => item.dt)
      },
      yaxis: {
        show: false,
        tickAmount: 5,
        min ,
        max,
        forceNiceScale: true
      },
      responsive: [
        {
          breakpoint: 370,
          options: {
            chart: {
              width:"100%"
            }
          }
        }
      ]
    };
  
    const series= [
      {
        data: map(data, (item) => item.temp)
      }
    ];
  
    return {options, series};
  }