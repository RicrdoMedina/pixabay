import Button from "@/components/Button/Button";

type ButtonProps = {
	label: string;
	className: string;
	primaryStyle: string;
	secondaryStyle: string;
	activeStyle: string;
	onClick: () => void;
};

class ButtonBuilder {
	private props: ButtonProps;

	constructor(label: string, primaryStyle: string, secondaryStyle: string, activeStyle: string, onClick: () => void) {
		this.props = {
			label,
			primaryStyle,
			secondaryStyle,
			activeStyle,
			className: '',
			onClick,
		};
	}

	setPrimaryStyle() {
		this.props.className = this.props.primaryStyle
		return this;
	}

	setSecondaryStyle() {
		this.props.className =
			this.props.secondaryStyle;
		return this;
	}

	setActiveStyle() {
		this.props.className += ` ${this.props.activeStyle}`;
		return this;
	}

	build() {
		return {
			component: Button,
			props: this.props,
		};
	}
}

export default ButtonBuilder;

