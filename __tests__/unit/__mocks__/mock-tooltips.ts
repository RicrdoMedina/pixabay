import { tooltipConfig } from '@/interfaces';

const mockTooltips: tooltipConfig[] = [
	{
		id: '1',
		content: 'Tooltip 1',
		place: 'top',
		icon: 'icon1',
		iconClassName: 'icon-class-1',
		className: 'button-class-1',
		onClick: jest.fn(),
	},
	{
		id: '2',
		content: 'Tooltip 2',
		place: 'bottom',
		icon: 'icon2',
		iconClassName: 'icon-class-2',
		className: 'button-class-2',
		onClick: jest.fn(),
	},
];

export default mockTooltips
