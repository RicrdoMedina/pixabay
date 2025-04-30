import { FC } from 'react';
import TooltipIconButton from '@/components/TooltipIconButton/TooltipIconButton';
import { tooltipConfig } from '@/interfaces';

type ImageActionsOverlayProps = {
	tooltips: tooltipConfig[];
};

const ImageActionsOverlay: FC<ImageActionsOverlayProps> = ({ tooltips }) => {

	return (
		<div className="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-500" data-testid="image-actions-overlay">
			{tooltips.map((tooltip, index) => (
				<TooltipIconButton
					key={index}
					className={tooltip.className}
					icon={tooltip.icon}
					iconClassName={tooltip.iconClassName}
					tooltipConfig={{
						id: tooltip.id,
						content: tooltip.content,
						place: tooltip.place,
					}}
					onClick={tooltip.onClick}
				/>
			))}

			<div className="absolute top-0 left-0 w-full p-8 flex justify-start items-center gap-2 bg-[linear-gradient(rgba(25,27,38,.56)_0%,rgba(25,27,38,0)_100%)] cursor-pointer pointer-events-none z-10" data-testid="gradient-top" />

			<div className="absolute bottom-0 left-0 w-full min-h-[112px] p-4 flex justify-between items-end gap-2 bg-[linear-gradient(rgba(25,27,38,0)_0%,rgba(25,27,38,.56)_100%)] cursor-pointer pointer-events-none z-10" data-testid="gradient-bottom"/>
		</div>
	);
};

export default ImageActionsOverlay;
