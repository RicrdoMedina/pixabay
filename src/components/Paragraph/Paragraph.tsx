import { FC } from 'react';

type ParagraphProps = {
	className: string;
	text: string;
};

const Paragraph: FC<ParagraphProps> = ({ className, text }) => {
	return <div className={className}>{text}</div>;
};

export default Paragraph;
