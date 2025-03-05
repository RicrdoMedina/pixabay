type ButtonProps = {
	label: string;
	className: string;
	defaultStyle: string;
	activeStyle: string;
	inactiveStyle: string;
	onClick: () => void;
};

class ButtonBuilder {
	private props: ButtonProps;
	private Component: React.ComponentType<any>;

	constructor(
		Component: React.ComponentType<any>,
		label: string,
		defaultStyle: string,
		activeStyle: string,
		inactiveStyle: string,
		onClick: () => void
	) {
		this.Component = Component;
		this.props = {
			label,
			defaultStyle,
			inactiveStyle,
			activeStyle,
			className: '',
			onClick,
		};
	}

	setDefaultStyle() {
		this.props.className = this.props.defaultStyle;
		return this;
	}

	setActiveStyle() {
		this.props.className = `${this.props.defaultStyle} ${this.props.activeStyle}`.trim();
		return this;
	}

	setInactiveStyle() {
		this.props.className = `${this.props.defaultStyle} ${this.props.inactiveStyle}`.trim();
		return this;
	}

	build() {
		return {
			component: this.Component,
			props: this.props,
		};
	}
}

export default ButtonBuilder;
