import { renderHook, act } from '@testing-library/react';
import useIsMobile from '@/hooks/use-is-mobile';

describe('useIsMobile Test Unit', () => {
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

	test('Should update the value of isMobile to false when the window is greater than 769', () => {
		resizeWindow(800);
		const { result } = renderHook(() => useIsMobile());

		expect(result.current).toEqual({ isMobile: false, isChecked: true });
	});

  test('Should update the value of isMobile to true when the window is less than 769', () => {
		resizeWindow(415);
		const { result } = renderHook(() => useIsMobile());

		expect(result.current).toEqual({ isMobile: true, isChecked: true });
	});

  test('Should set isMobile to true when the window width drops below the threshold', () => {
	  resizeWindow(1200);
    const { result } = renderHook(() => useIsMobile());

    act(() => {
      resizeWindow(415);
    });

		expect(result.current).toEqual({ isMobile: true, isChecked: true });
	});
});
