import React from 'react';
import { render, screen } from '@testing-library/react';
import MasonryGallery from '@/components/MasonryGallery/MasonryGallery';

describe('MasonryGallery', () => {
  const renderItem = (item: { id: string; name: string }) => (
    <div data-testid="item">{item.name}</div>
  );

  const mockItems = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ];

  test('should render the MasonryGallery component with elements', () => {
    render(
      <MasonryGallery
        items={mockItems}
        renderItem={renderItem}
        className="custom-class"
      />
    );

    const gallery = screen.getByTestId('masonry-gallery');
    expect(gallery).toBeInTheDocument();
    expect(gallery).toHaveClass('custom-class');
    expect(gallery).toHaveAttribute('role', 'grid');
    expect(gallery).toHaveAttribute('aria-label', 'Image gallery');

    const items = screen.getAllByTestId('item');
    expect(items).toHaveLength(mockItems.length);
    expect(items[0]).toHaveTextContent('Item 1');
    expect(items[1]).toHaveTextContent('Item 2');
  });

  test('should handle empty items array', () => {
    render(
      <MasonryGallery
        items={[]}
        renderItem={renderItem}
        className="custom-class"
      />
    );

    const items = screen.queryAllByTestId('item');
    expect(items).toHaveLength(0);

    const gallery = screen.getByTestId('masonry-gallery');
    expect(gallery).toBeInTheDocument();
  });

  test('should applies custom className correctly', () => {
    render(
      <MasonryGallery
        items={mockItems}
        renderItem={renderItem}
        className="custom-class"
      />
    );

    const gallery = screen.getByTestId('masonry-gallery');
    expect(gallery).toHaveClass('custom-class');
  });

  test('should calls renderItem for each item', () => {
    const mockRenderItem = jest.fn((item) => (
      <div data-testid="item">{item.name}</div>
    ));

    render(
      <MasonryGallery
        items={mockItems}
        renderItem={mockRenderItem}
        className="custom-class"
      />
    );

    expect(mockRenderItem).toHaveBeenCalledTimes(mockItems.length);
    expect(mockRenderItem).toHaveBeenCalledWith(mockItems[0]);
    expect(mockRenderItem).toHaveBeenCalledWith(mockItems[1]);
  });
});