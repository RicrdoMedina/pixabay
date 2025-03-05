import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '@/components/Paragraph/Paragraph';

describe('Paragraph', () => {
	test('should render the paragraph with text and classes', async () => {
		const text = 'Hello, World!';
		const className = 'custom-class';

		render(<Paragraph className={className} text={text} />);

    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent(text);
    expect(paragraphElement).toHaveClass(className);
	});
});
