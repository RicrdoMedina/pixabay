export interface BaseRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string | number): Promise<T | null>;
  create(item: T): Promise<T>;
  update(id: string | number, item: Partial<T>): Promise<T | null>;
  delete(id: string | number): Promise<boolean>;
}
