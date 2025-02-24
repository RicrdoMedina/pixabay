import ButtonBuilder from "@/lib/Builder/ButtonBuilder";

export function mapCategoriesToButtons(
	categories: any[],
	selectedCategoryId: number,
	primaryStyle: string,
	secondaryStyle: string,
	activeStyle: string,
	onCategoryClick: (categoryId: number) => void
) {
	return categories.map(({ categoryId, categoryName }) => {
		const isActive = categoryId === selectedCategoryId;
		const buttonBuilder = new ButtonBuilder(categoryName, primaryStyle,secondaryStyle,activeStyle,() => onCategoryClick(categoryId));
		if (isActive) {
			buttonBuilder.setPrimaryStyle().setActiveStyle();
		} else {
			buttonBuilder.setSecondaryStyle();
		}

		return buttonBuilder.build();
	});
}
