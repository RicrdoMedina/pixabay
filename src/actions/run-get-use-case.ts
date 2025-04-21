"use server";

export async function runGetUseCase<T>(
  useCase: () => Promise<T[]>
): Promise<T[]> {
  try {
    return await useCase();
  } catch (error) {
   // console.error(error);
    return [];
  }
}