import { mapItemsToButtons } from '@/lib/map/mapItemsToButtons';
import ButtonBuilder from '@/lib/Builder/ButtonBuilder';
import Button from '@/components/Button/Button';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

describe('mapItemsToButtons Integration Test', () => {
  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn();
  });

  test('should create button instances with correct active and inactive props', () => {
    const items = [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
    ];
    const selectedItemId = 1;

    const buttons = mapItemsToButtons(
      items,
      selectedItemId,
      'id',
      'label',
      'btn',
      'btn-inactive',
      'btn-active',
      Button,
      ButtonBuilder,
      onClickMock
    );

    expect(buttons).toHaveLength(2);

    expect(buttons[0].component).toEqual(Button);
    expect(buttons[0].props.className).toBe('btn btn-active');

    expect(buttons[1].component).toEqual(Button);
    expect(buttons[1].props.className).toBe('btn btn-inactive');
  });

  test('should call onClick with correct id when button is clicked', () => {
    const items = [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
    ];
    const selectedItemId = 1;

    const buttons = mapItemsToButtons(
      items,
      selectedItemId,
      'id',
      'label',
      'btn',
      'btn-inactive',
      'btn-active',
      Button,
      ButtonBuilder,
      onClickMock
    );

    buttons[0].props.onClick();

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(1);
  });

  test('should handle empty items array', () => {
    const items: any[] = [];
    const selectedItemId = 1;

    const buttons = mapItemsToButtons(
      items,
      selectedItemId,
      'id',
      'label',
      'btn',
      'btn-inactive',
      'btn-active',
      Button,
      ButtonBuilder,
      onClickMock
    );

    expect(buttons).toHaveLength(0);
  });

  test('should render Button component with correct props', () => {
    const items = [
      { id: 1, label: 'Item 1' },
      { id: 2, label: 'Item 2' },
    ];
    const selectedItemId = 1;

    const buttons = mapItemsToButtons(
      items,
      selectedItemId,
      'id',
      'label',
      'btn',
      'btn-inactive',
      'btn-active',
      Button,
      ButtonBuilder,
      onClickMock
    );

    const Component = buttons[0].component;
    const props = buttons[0].props
    const { container } = render(<Component {...props} />);
    expect(container.textContent).toBe('Item 1');
    expect(container.querySelector('button')?.className).toBe('btn btn-active');
  });
});