import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContainerSwiper from '@/components/ContainerSwiper/ContainerSwiper';
import MockButton from '@/mocks/dummyData/MockButton';

describe('ContainerSwiper', () => {
	let onClickMock: jest.Mock;
	let components;

	beforeEach(() => {
		onClickMock = jest.fn();
		components = [
			{
				component: MockButton,
				props: {
					label: 'Item 1',
					defaultStyle: 'btn',
					inactiveStyle: 'btn-inactive',
					activeStyle: 'btn-active',
					className: '',
					onClick: onClickMock,
				},
			},
			{
				component: MockButton,
				props: {
					label: 'Item 2',
					defaultStyle: 'btn',
					inactiveStyle: 'btn-inactive',
					activeStyle: 'btn-active',
					className: '',
					onClick: onClickMock,
				},
			},
		];
	});

	test('should render the container with the correct class', async () => {
		const className = 'custom-class';

		render(
			<ContainerSwiper
				className={className}
				components={components}
				itemsToShow={3}
				slidesPerGroup={3}
				customNavigation={false}
			/>
		);

		const swiperContainer = screen.getByTestId('swiper-container');
	});
});
