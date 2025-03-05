import { FC, ReactNode } from 'react';

type ParagraphWrapperProps = {
	className: string;
	icon: FC<{ className?: string }>;
	iconClassName?: string;
	children: ReactNode;
};

const ParagraphWrapper: FC<ParagraphWrapperProps> = ({
	className,
	icon: Icon,
	iconClassName,
	children,
}) => {
	return (
		<article className={className}>
			<div className="flex items-start justify-center md:w-24 flex-grow-0">
				<span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
					<Icon className={iconClassName} />
				</span>
			</div>
			<div className="flex flex-col items-start justify-start flex-grow">
				{children}
			</div>
		</article>
	);
};

export default ParagraphWrapper;
