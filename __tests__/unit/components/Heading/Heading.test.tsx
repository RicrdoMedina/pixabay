import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading/Heading';

describe('Heading Component', () => {
  test('should render the heading with the default level (h1)', () => {
    const content = 'Hello, World!';

    render(<Heading>{content}</Heading>);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(content);
    expect(heading).toHaveClass('heading heading-1');
  });

  test('should render the heading with a specific level (h2)', () => {
    const content = 'Hello, World!';
    const level = 2;

    render(<Heading level={level}>{content}</Heading>);

    const heading = screen.getByRole('heading', { level });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(content);
    expect(heading).toHaveClass('heading heading-2');
  });

  test('should render the heading with additional classes', () => {
    const content = 'Hello, World!';
    const className = 'custom-class';

    render(<Heading className={className}>{content}</Heading>);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(content);
    expect(heading).toHaveClass('heading heading-1 custom-class');
  });
});