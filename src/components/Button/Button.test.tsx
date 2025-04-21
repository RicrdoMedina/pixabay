import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button/Button';

describe('Button', () => {
	test('should render the button with the correct label and class', () => {
		const className = 'custom-class';
		const label = 'Click Me';

		render(<Button className={className} label={label} />);

		const button = screen.getByRole('button', { name: label });

		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(className);
		expect(button).toHaveTextContent(label);
	});

	test('should render the icon on the left if iconPosition is "left"', () => {
		const icon = <span data-testid="icon">Icon</span>;
		const label = 'Click Me';

		render(<Button className='btn' label={label} icon={icon} iconPosition="left" />);

		const iconElement = screen.getByTestId('icon');
		expect(iconElement).toBeInTheDocument();

		const button = screen.getByRole('button', { name: label });

		const iconWrapper = button.querySelector('span');

		expect(iconWrapper?.firstChild).toBe(iconElement);

		expect(button).toHaveTextContent(/Icon Click Me/);
	});

	test('should render the icon on the right if iconPosition is "right"', () => {
		const icon = <span data-testid="icon">Icon</span>;
		const label = 'Click Me';

		render(<Button className='btn' label={label} icon={icon} iconPosition="right" />);

		const iconElement = screen.getByTestId('icon');
		expect(iconElement).toBeInTheDocument();

		const button = screen.getByRole('button', { name: label });

		expect(button).toContainElement(iconElement);

		expect(button).toHaveTextContent(/Click Me\s+Icon/);
	});

	test('should call onClick when the button is clicked', () => {
    const onClickMock = jest.fn();
    const label = 'Click Me';

    render(<Button className='btn' label={label} onClick={onClickMock} />);

    const button = screen.getByRole('button', { name: label });

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
