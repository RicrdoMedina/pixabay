import {
  isEmpty,
  isNull,
  isObject,
  isUndefined,
  isArray,
} from '@/lib/utils';

describe('isEmpty', () => {
  test('debe devolver true para null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('debe devolver true para undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('debe devolver true para 0', () => {
    expect(isEmpty(0)).toBe(true);
  });

  test('debe devolver true para cadena vacía', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('debe devolver true para objeto vacío', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('debe devolver true para array vacío', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('debe devolver false para objetos no vacíos', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('debe devolver false para arrays no vacíos', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('debe devolver false para valores truthy no objeto (p.ej. 5, "hola")', () => {
    expect(isEmpty(5)).toBe(false);
    expect(isEmpty('hola')).toBe(false);
  });
});

describe('isNull', () => {
  test('debe devolver true solo para null', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
  });
});

describe('isObject', () => {
  test('debe devolver true para objetos literales', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });

  test('debe devolver true para arrays', () => {
    expect(isObject([])).toBe(true);
  });

  test('debe devolver false para null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('debe devolver false para valores primitivos', () => {
    expect(isObject(123)).toBe(false);
    expect(isObject('str')).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});

describe('isUndefined', () => {
  test('debe devolver true solo para undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined('')).toBe(false);
  });
});

describe('isArray', () => {
  test('debe devolver true solo para arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1,2,3])).toBe(true);
    expect(isArray('not an array')).toBe(false);
    expect(isArray({ 0: 'a' })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});
