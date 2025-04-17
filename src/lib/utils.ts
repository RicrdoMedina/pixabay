export const isEmpty = (value: unknown): boolean => {
  if (value == null || value === 0 || value === '') {
    return true;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};


export const isNull = (value: unknown): value is null => {
  return value === null;
};


export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null;
};


export const isUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined';
};


export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};