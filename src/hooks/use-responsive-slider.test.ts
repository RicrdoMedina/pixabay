import { renderHook, act } from '@testing-library/react';
import useResponsiveSlider from '@/hooks/use-responsive-slider';

describe('useResponsiveSlider Test Unit', () => {
  const config = {
    0: { itemsToShow: 1, slidesPerGroup: 1 },
    768: { itemsToShow: 2, slidesPerGroup: 2 },
    1024: { itemsToShow: 3, slidesPerGroup: 3 },
  };

  const resizeWindow = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    window.dispatchEvent(new Event('resize'));
  };

  beforeEach(() => {
    resizeWindow(0);
  });

  test('should return correct initial settings based on window width', () => {
    resizeWindow(800);

    const { result } = renderHook(() => useResponsiveSlider(config));

    expect(result.current).toEqual({ itemsToShow: 2, slidesPerGroup: 2 });
  });

  test('should update settings when window is resized to a larger breakpoint', () => {
    resizeWindow(800);
    const { result } = renderHook(() => useResponsiveSlider(config));

    act(() => {
      resizeWindow(1200);
    });

    expect(result.current).toEqual({ itemsToShow: 3, slidesPerGroup: 3 });
  });

  test('should update settings when window is resized to a smaller breakpoint', () => {
    resizeWindow(1200);
    const { result } = renderHook(() => useResponsiveSlider(config));

    act(() => {
      resizeWindow(500);
    });

    expect(result.current).toEqual({ itemsToShow: 1, slidesPerGroup: 1 });
  });
});
