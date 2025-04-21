import reducer, {
  addFavorite,
  removeFavorite,
  setInitialGalleryItems
} from '@/store/slices/gallery/gallery-slice';
import mockGalleryItems from '../../../../__tests__/unit/__mocks__/mock-gallery-items';
import type { GalleryEntity } from '@/gallery/domain/gallery-entity';

describe('gallerySlice reducer', () => {
  const mockItems: GalleryEntity[] = mockGalleryItems

  test('setInitialGalleryItems only when status is "idle"', () => {
    const initialState = {
      items: [],
      status: 'idle',
      favorites: [],
    };

    const result = reducer(initialState, setInitialGalleryItems(mockGalleryItems));

    expect(result.items).toEqual(mockGalleryItems);
    expect(result.status).toBe('succeeded');

    const newState = reducer(result, setInitialGalleryItems([]));
    expect(newState.items).toEqual(mockGalleryItems);
  });

  test('addFavorite adds successfully', () => {
    const mockItem = mockItems[0]
    const state = { items: [], status: 'idle', favorites: [] };
    const result = reducer(state, addFavorite(mockItem));

    expect(result.favorites).toContainEqual(mockItem);
  });

  test('removeFavorite removes by id', () => {
    const mockItem = mockItems[0]
    const state = {
      items: [],
      status: 'idle',
      favorites: [mockItem],
    };
    const result = reducer(state, removeFavorite({ id: 9435827 }));

    expect(result.favorites).toHaveLength(0);
  });
});
