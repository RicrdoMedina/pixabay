import React from 'react';
import { render, screen, within } from '@testing-library/react';
import NavigationList from '@/components/NavigationList/NavigationList';
import MockButton from '@/mocks/dummyData/MockButton';

describe('NavigationList', () => {
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
		];
	});

	test('should render the <nav> with the correct props', () => {
		const wrapperClasses = 'wrapper';
		render(
			<NavigationList components={components} wrapperClasses={wrapperClasses} />
		);

		const navElement = screen.getByRole('navigation');
		expect(navElement).toBeInTheDocument();
		expect(navElement).toHaveClass(wrapperClasses);
	});

	test('should render the <ul> with the correct props', () => {
		const containerClasses = 'list';
		render(
			<NavigationList
				components={components}
				containerClasses={containerClasses}
			/>
		);

		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
		expect(listElement).toHaveClass(containerClasses);
	});

	test('should render the <li> with the correct classes', () => {
		const itemClasses = 'listitem';
		render(
			<NavigationList components={components} itemClasses={itemClasses} />
		);

		const listItems = screen.getAllByRole('listitem');
		listItems.forEach(listItem => {
			expect(listItem).toHaveClass(itemClasses);
		});
		expect(listItems).toHaveLength(components.length);

		const buttonElement = screen.getByRole('button', { name: 'Mock' });
    expect(buttonElement).toBeInTheDocument();
	});

	test('should render multiple <li> elements', () => {
		const multipleComponents = [
			{ component: MockButton, props: { label: 'Item 1' } },
			{ component: MockButton, props: { label: 'Item 2' } },
		];
		render(<NavigationList components={multipleComponents} />);

		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(multipleComponents.length);
	});

	test('should render NavigationList with empty components array', () => {
		render(<NavigationList components={[]} />);

		const liElements = screen.queryAllByRole('listitem');
		expect(liElements).toHaveLength(0);
	});
});
