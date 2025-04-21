import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageCard from '@/components/ImageCard/ImageCard';
import mockGalleryItems from '../../../__tests__/unit/__mocks__/mock-gallery-items';
import mockGalleryApi from '../../../__tests__/unit/__mocks__/mock-gallery-api';

describe('ImageCard', () => {
	const mockImage = mockGalleryItems[0];

	test('shouldrenders the image with the correct props and styles', () => {
		render(<ImageCard image={mockImage} />);

		const alt = mockImage.tags;
		const imgSrc = mockImage.largeImageURL;

		const container = screen.getByTestId('image-card');
		expect(container).toBeInTheDocument();
		expect(container).toHaveClass(
			'break-inside-avoid relative mb-4 overflow-hidden shadow-lg group cursor-pointer'
		);

		const imgElement = screen.getByAltText(alt);
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveClass('w-full h-auto object-cover');
		expect(imgElement.src).toBe(imgSrc);
		expect(imgElement.alt).toBe(alt);
	});

	test('should renders the overlay when provided', () => {
		const overlayContent = <div data-testid="overlay">Overlay Content</div>;

		render(<ImageCard image={mockImage} overlay={overlayContent} />);

		const overlayElement = screen.getByTestId('overlay');
		expect(overlayElement).toBeInTheDocument();
	});

	test('does not render the overlay when not provided', () => {
		render(<ImageCard image={mockImage} />);

		const overlayElement = screen.queryByTestId('overlay');
		expect(overlayElement).not.toBeInTheDocument();
	});

	test('should show image not available message', () => {
		const invalidImage = { ...mockImage, verified: false };
		render(<ImageCard image={invalidImage} />);

		const placeholder = screen.getByText('No image available');
		expect(placeholder).toBeInTheDocument();
	});
});