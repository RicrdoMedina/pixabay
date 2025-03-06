import { FC, ComponentType } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type TooltipWithProps = {
	id: string;
	place: 'bottom';
	content: string;
};

type TooltipIconButtonProps = {
	tooltipConfig: TooltipWithProps;
	className: string;
	icon: ComponentType<any>;
	iconClassName: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const TooltipIconButton: FC<TooltipIconButtonProps> = ({
	className,
	icon: Icon,
	iconClassName,
	tooltipConfig,
	onClick,
}) => {
	return (
		<div className={className} data-tooltip-id={tooltipConfig.id}>
			<button className='w-full h-full flex items-center justify-center' onClick={onClick} type="button">
				<Icon className={iconClassName} />
			</button>
			<Tooltip
				id={tooltipConfig.id}
				place={tooltipConfig.place}
				content={tooltipConfig.content}
			/>
		</div>
	);
};

export default TooltipIconButton;
