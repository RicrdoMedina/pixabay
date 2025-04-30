import ButtonBuilder from '@/lib/builder/button-builder';

export function mapItemsToButtons<T>(
  items: T[],
  selectedId: number,
  idKey: keyof T,
  labelKey: keyof T,
  defaultStyle: string,
  inactiveStyle: string,
  activeStyle: string,
  ButtonComponent: React.ComponentType<any>,
  ButtonBuilderClass: new (...args: any[]) => ButtonBuilder,
  onClick: (id: number) => void
) {
  return items.map((item) => {
    const id = item[idKey] as unknown as number;
    const label = item[labelKey] as unknown as string;

    const isActive = id === selectedId;

    const buttonBuilder = new ButtonBuilderClass(
      ButtonComponent,
      label,
      defaultStyle,
      activeStyle,
      inactiveStyle,
      () => onClick(id)
    );

    if (isActive) {
      buttonBuilder.setActiveStyle();
    } else {
      buttonBuilder.setDefaultStyle().setInactiveStyle();
    }

    return buttonBuilder.build();
  });
}
