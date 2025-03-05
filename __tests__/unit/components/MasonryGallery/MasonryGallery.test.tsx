import React from 'react';
import { render, screen } from '@testing-library/react';
import MasonryGallery from '@/components/MasonryGallery/MasonryGallery';
import mockGalleryItems from '@/mocks/mockGalleryItems';

describe('MasonryGallery', () => {
	test('should render the container with the correct props', async () => {
		render(<MasonryGallery items={mockGalleryItems} />);

		const container = screen.getByTestId('masonry-gallery');
		expect(container).toBeInTheDocument();
		expect(container).toHaveClass(
			'columns md:columns-2 lg:columns-3 xl:columns-4 gap-4'
		);
	});

	test('should render the ImageCard', async () => {
		render(<MasonryGallery items={mockGalleryItems} />);

		const imageCards = screen.getAllByTestId('image-card');

		expect(imageCards).toHaveLength(mockGalleryItems.length);

		imageCards.forEach((imageCard, index) => {
			expect(imageCard.src).toBe(mockGalleryItems[index].largeImageURL);
			expect(imageCard.alt).toBe(mockGalleryItems[index].type);
      expect(imageCard).toHaveClass('w-full h-auto object-cover')
		});
	});

	test('should not render any ImageCard when items array is empty', () => {
		render(<MasonryGallery items={[]} />);

		const imageCards = screen.queryAllByTestId('image-card');
		expect(imageCards).toHaveLength(0);
	});
});
