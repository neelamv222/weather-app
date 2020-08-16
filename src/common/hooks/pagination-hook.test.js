import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from './pagination-hook';
import {data, currentPageData} from './pagination-mocks';

describe('Pagniation hook test cases', () => {
  let result;
  beforeEach(() => {
    result  = renderHook(() => usePagination(data, 3, 'F')).result;
  });

  test('should increment current page', () => {
    act(() => {
      result.current.next();
    });
    expect(result.current.currentPage).toBe(2);
  });

  test('should decrement current page', () => {
    act(() => {
      result.current.previous();
    });
    expect(result.current.currentPage).toBe(1);
  });

  test('should return weather data for 3 days in Fahrenheit Unit', () => {
    act(() => {
      result.current.currentPageData();
    });
    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentPageData()).toEqual(currentPageData);
  });

  test('should return maxPage count', () => {
    expect(result.current.maxPage).toBe(2);
  });
});
