import { IMapButtonsConfig } from "@/interfaces";
import { mapItemsToButtons } from "@/lib/map/map-items-to-buttons";

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

export const createComponents = <T>(config: IMapButtonsConfig<T>) => {
  return mapItemsToButtons(
    config.items,
    config.selectedItem,
    config.idKey,
    config.nameKey,
    config.styles.default,
    config.styles.inactive,
    config.styles.active,
    config.ButtonComponent,
    config.ButtonBuilderClass,
    config.onClick
  );
}
