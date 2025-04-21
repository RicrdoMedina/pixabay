import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageActionsOverlay from '@/components/ImageCard/ImageActionsOverlay';
import { tooltipConfig } from '@/interfaces';
import mockTooltips from '../../../__tests__/unit/__mocks__/mock-tooltips';

describe('ImageActionsOverlay', () => {
	test('should render the container with correct styles when the tooltip array is empty', () => {
		render(<ImageActionsOverlay tooltips={[]} />);
		const container = screen.getByTestId('image-actions-overlay');
		expect(container).toBeInTheDocument();
		expect(container).toHaveClass(
			'w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-500'
		);
	});

	test('should renders the correct number of TooltipIconButton components when tooltips array is provided', () => {
		render(<ImageActionsOverlay tooltips={mockTooltips} />);

		const tooltips = screen.getAllByTestId(/tooltip-container-/);

		expect(tooltips).toHaveLength(mockTooltips.length);

		tooltips.forEach((tooltip, index) => {
			expect(tooltip).toHaveClass(mockTooltips[index].className);
		});
	});

	test('should handle an empty list and not show any tooltips', () => {
		const emptyTooltips: tooltipConfig[] = [];
		render(<ImageActionsOverlay tooltips={emptyTooltips} />);

		const tooltipContainers = screen.queryAllByTestId(/tooltip-container-/);
		expect(tooltipContainers).toHaveLength(0);
	});

	test('should call the onClick handler when a TooltipIconButton is clicked', () => {
		render(<ImageActionsOverlay tooltips={mockTooltips} />);

		const firstButton = screen.getByTestId('tooltip-icon-button-1');

		fireEvent.click(firstButton);

		expect(mockTooltips[0].onClick).toHaveBeenCalled();
	});
});