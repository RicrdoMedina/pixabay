import React from 'react';

type MasonryGalleryProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
};

const MasonryGallery = <T,>({ items, renderItem, className }: MasonryGalleryProps<T>) => {
  return (
    <div
      className={className}
      data-testid="masonry-gallery"
      role="grid"
      aria-label="Image gallery"
    >
      {items.map((item, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;