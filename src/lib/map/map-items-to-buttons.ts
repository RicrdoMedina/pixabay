import ButtonBuilder from '@/lib/builder/button-builder';

export function mapItemsToButtons(
	items: any[],
	selectedItemId: number,
	idKey: string,
	labelKey: string,
	defaultStyle: string,
	inactiveStyle: string,
	activeStyle: string,
	ButtonComponent: React.ComponentType<any>,
	ButtonBuilderClass: new (...args: any[]) => ButtonBuilder,
	onClick: (id: number) => void
) {
	return items.map((item) => {
		const id = item[idKey];
		const label = item[labelKey];
		const isActive = id === selectedItemId;

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
