import { map, minBy, maxBy, get, floor } from 'lodash';
import moment from 'moment';

export const barChartConfigurations = (data, tempUnit) => {
  const min = floor(get(minBy(data, (item) => item.temp), 'temp') / 10) * 10;
  const max = get(maxBy(data, (item) => item.temp), 'temp');

  const options = {
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
      categories: map(data, (item) => moment.unix(item.dt).format('DD MMM YY, hh:mm A'))
    },
    yaxis: {
      show: false,
      tickAmount: 5,
      min,
      max,
      forceNiceScale: true
    },
    tooltip: {
      x: {
        show: true,
        format: 'DD MMM YY',
      },
      y: {
        title: {
          formatter: function (val) {
            return val;
          }
        },
      }
    },
    responsive: [
      {
        breakpoint: 370,
        options: {
          chart: {
            width: "100%"
          }
        }
      }
    ]
  };

  const series = [
    {
      name: `Temp (°${tempUnit}): `,
      data: map(data, (item) => item.temp)
    }
  ];

  return { options, series };
}