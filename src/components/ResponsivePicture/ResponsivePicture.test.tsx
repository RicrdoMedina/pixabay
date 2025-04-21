import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsivePicture from '@/components/ResponsivePicture/ResponsivePicture';
import mockSourceData from '../../../__tests__/unit/__mocks__/mock-source-data';

describe('ResponsivePicture', () => {
	const imgSrc =
		'https://cdn.pixabay.com/index/2025/02/24/08-54-42-37_1440x550.jpg';

	const alt = 'Free mixed hero backgrounds';

	const className = 'custom-class';
	test('should render the image with the correct props', async () => {
		render(
			<ResponsivePicture
				sources={mockSourceData}
				imgSrc={imgSrc}
				alt={alt}
				className={className}
			/>
		);

		const imgElement = screen.getByAltText(alt);

		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveClass(className);
		expect(imgElement.src).toBe(imgSrc);
		expect(imgElement.alt).toBe(alt);
	});

	test('should renders <source> elements correctly', async () => {
		const { container } = render(
			<ResponsivePicture sources={mockSourceData} imgSrc={imgSrc} alt={alt} />
		);

		const sourceElements = container.querySelectorAll('source');

		expect(sourceElements).toHaveLength(mockSourceData.length);

		sourceElements.forEach((source, index) => {
			expect(source.srcset).toBe(mockSourceData[index].srcSet);
			expect(source.media).toBe(mockSourceData[index].media);
		});
	});

	test('should handle empty items array', async () => {
		const { container } = render(
			<ResponsivePicture sources={[]} imgSrc={imgSrc} alt={alt} />
		);

		const sourceElements = container.querySelectorAll('source');
		expect(sourceElements).toHaveLength(0);
	});
});
