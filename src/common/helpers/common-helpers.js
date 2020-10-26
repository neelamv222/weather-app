import { get, reduce, filter, remove, meanBy } from 'lodash';

const calculateAvgTemp = (readings) => {
  const meanValue = meanBy(readings, (reading) => reading.temp);
  return meanValue.toFixed(2);
}

const dataMapping = (list) => {
  let filterSameDateData = [];
  let data = [];
  let duplicateData = [...list];
  duplicateData.forEach(element => {
    filterSameDateData = filter(list, (item) => item.dt_txt.split(' ')[0] === element.dt_txt.split(' ')[0]);
    remove(duplicateData, (item) => item.dt_txt.split(' ')[0] === filterSameDateData[0].dt_txt.split(' ')[0]);
    const readings = reduce(filterSameDateData, (result, item, items) => {
      return [...result, { dt: item.dt, temp: item.main.temp }];
    }, []);
    data.push({ date: element.dt_txt.split(' ')[0], avgTemp: calculateAvgTemp(readings), readings });
  });
  return data;
};

export const parseResponse = (response = {}) => {
  const status = get(response, 'status');
  if (status === 200) {
    return {
      type: 'success',
      data: dataMapping(get(response, 'data.list', []))
    }
  }
  return {
    type: 'error',
    data: response.data
  }
};

// helper method to convert F to C
export const convertToCelcius = (farenheitVal) => {
  const val = Math.round(((farenheitVal - 32) * 5) / 9);
  return val;
}