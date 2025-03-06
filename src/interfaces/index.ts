type PlacesType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export interface tooltipConfig  {
	id: string;
	content: string;
	place: PlacesType;
	icon: React.ComponentType<any>;
	iconClassName: string;
	onClick: () => void;
	className:string;
}
