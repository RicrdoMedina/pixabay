import { renderHook, act } from '@testing-library/react';
import useScrollDirection from '@/hooks/use-scroll-direction';

describe('useScrollDirection Test Unit', () => {
  const threshold = 100;

  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('should return false when scrollY is below threshold', () => {
    const { result } = renderHook(() => useScrollDirection(threshold));

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);
  });

  test('should return true when scrollY is above threshold', () => {
    const { result } = renderHook(() => useScrollDirection(threshold));

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);
  });

  test('should update correctly if scrollY changes across the threshold', () => {
    const { result } = renderHook(() => useScrollDirection(threshold));

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);
  });
});
