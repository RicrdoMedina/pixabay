import { mapItemsToButtons } from '@/lib/map/mapItemsToButtons';
import MockButton from '../../__mocks__/MockButton';

describe('mapItemsToButtons.ts', () => {
	let onClickMock: jest.Mock;

	beforeEach(() => {
		onClickMock = jest.fn();
	});

	test('should create button instances with active props', async () => {
		const items = [
			{ id: 1, label: 'Item 1' },
			{ id: 2, label: 'Item 2' },
		];
		const selectedItemId = 1;
		const MockButtonBuilder = jest.fn().mockImplementation(() => ({
			setActiveStyle: jest.fn().mockReturnThis(),
			setInactiveStyle: jest.fn().mockReturnThis(),
			setDefaultStyle: jest.fn().mockReturnThis(),
			build: jest.fn(() => ({
				component: MockButton,
				props: { className: 'btn btn-active' },
			})),
		}));

		const buttons = mapItemsToButtons(
			items,
			selectedItemId,
			'id',
			'label',
			'btn',
			'btn-inactive',
			'btn-active',
			MockButton,
			MockButtonBuilder,
			onClickMock
		);

		expect(buttons).toHaveLength(2);
		expect(buttons[0].component).toEqual(MockButton);
		expect(buttons[0].props.className).toBe('btn btn-active');
	});

	test('should create button instances with inactive props', async () => {
		const items = [
			{ id: 1, label: 'Item 1' },
			{ id: 2, label: 'Item 2' },
		];
		const selectedItemId = 1;
		const MockButtonBuilder = jest.fn().mockImplementation(() => ({
			setActiveStyle: jest.fn().mockReturnThis(),
			setInactiveStyle: jest.fn().mockReturnThis(),
			setDefaultStyle: jest.fn().mockReturnThis(),
			build: jest.fn(() => ({
				component: MockButton,
				props: { className: 'btn btn-inactive' },
			})),
		}));

		const buttons = mapItemsToButtons(
			items,
			selectedItemId,
			'id',
			'label',
			'btn',
			'btn-inactive',
			'btn-active',
			MockButton,
			MockButtonBuilder,
			onClickMock
		);

		expect(buttons).toHaveLength(2);
		expect(buttons[0].component).toEqual(MockButton);
		expect(buttons[1].props.className).toBe('btn btn-inactive');
	});

	test('should call onClick with correct id when button is clicked', async () => {
		const items = [
			{ id: 1, label: 'Item 1' },
			{ id: 2, label: 'Item 2' },
		];
		const selectedItemId = 1;

		const MockButtonBuilder = jest
			.fn()
			.mockImplementation(
				(_, label, defaultStyle, activeStyle, inactiveStyle, onClick) => ({
					setActiveStyle: jest.fn().mockReturnThis(),
					setInactiveStyle: jest.fn().mockReturnThis(),
					setDefaultStyle: jest.fn().mockReturnThis(),
					build: jest.fn(() => ({
						component: MockButton,
						props: { className: 'btn', onClick },
					})),
				})
			);

		const buttons = mapItemsToButtons(
			items,
			selectedItemId,
			'id',
			'label',
			'btn',
			'btn-inactive',
			'btn-active',
			MockButton,
			MockButtonBuilder,
			onClickMock
		);

		buttons[0].props.onClick();

		expect(onClickMock).toHaveBeenCalledTimes(1);
		expect(onClickMock).toHaveBeenCalledWith(1);
	});

  test('should call setDefaultStyle and setInactiveStyle for inactive buttons', async () => {
    const items = [{ id: 1, label: "Item 1" }, { id: 2, label: "Item 2" }];
    const selectedItemId = 1;
    const setDefaultStyleMock = jest.fn().mockReturnThis();
    const setInactiveStyleMock = jest.fn().mockReturnThis();
  
    const MockButtonBuilder = jest.fn().mockImplementation(() => ({
      setActiveStyle: jest.fn().mockReturnThis(),
      setInactiveStyle: setInactiveStyleMock,
      setDefaultStyle: setDefaultStyleMock,
      build: jest.fn(() => ({
        component: MockButton,
        props: { className: "btn btn-inactive" },
      })),
    }));
  
    mapItemsToButtons(
      items,
      selectedItemId,
      'id',
      'label',
      'btn',
      'btn-inactive',
      'btn-active',
      MockButton,
      MockButtonBuilder,
      onClickMock
    );
  
    expect(setDefaultStyleMock).toHaveBeenCalledTimes(1);
    expect(setInactiveStyleMock).toHaveBeenCalledTimes(1);
  });
  
});
