import { runGetUseCase } from "@/actions/run-get-use-case";
import mockGalleryItems from '../__mocks__/mock-gallery-items';

describe('runGetUseCase Unit Test', () => {
  test('should return gallery items when API responds correctly', async () => {
    const mockUseCase = jest.fn().mockResolvedValue(mockGalleryItems);

    const result = await runGetUseCase(mockUseCase);

    expect(mockUseCase).toHaveBeenCalledTimes(1);
		expect(result).toHaveLength(3);
		expect(result).toEqual(mockGalleryItems);
  });

  test('should handle errors and return an empty array when the API fails', async () => {
    const mockUseCase = jest.fn().mockRejectedValue(new Error('Falló'));

    const result = await runGetUseCase(mockUseCase);

    expect(result).toEqual([]);
    expect(mockUseCase).toHaveBeenCalledTimes(1);
  });
});
