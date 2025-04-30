import { FC, ComponentType } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';
import Button from '@/components/Button/Button';
import 'react-tooltip/dist/react-tooltip.css';

type TooltipWithProps = {
	id: string;
	place: PlacesType;
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
		<div
			className={className}
			data-tooltip-id={tooltipConfig.id}
			data-testid={`tooltip-container-${tooltipConfig.id}`}
		>
			<Button
				className="w-full h-full flex items-center justify-center"
				onClick={onClick}
				type="button"
				dataTestid={`tooltip-icon-button-${tooltipConfig.id}`}
				iconPosition="left"
				icon={<Icon className={iconClassName} />}
			/>
			<Tooltip
				id={tooltipConfig.id}
				place={tooltipConfig.place}
				content={tooltipConfig.content}
			/>
		</div>
	);
};

export default TooltipIconButton;
