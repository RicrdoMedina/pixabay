import { FC } from 'react';

type ParagraphProps = {
	className: string;
	text: string;
};

const Paragraph: FC<ParagraphProps> = ({ className, text }) => {
	return <p className={className} role="paragraph">{text}</p>;
};

export default Paragraph;
