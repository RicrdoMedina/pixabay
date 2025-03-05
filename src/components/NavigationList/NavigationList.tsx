import React from 'react';

type ComponentWithProps = {
	component: React.ElementType;
	props?: Record<string, any>;
};

type RendererProps = {
	components: ComponentWithProps[];
	wrapperClasses?: string;
	containerClasses?: string;
	itemClasses?: string;
};

const NavigationList: React.FC<RendererProps> = ({ components, containerClasses, wrapperClasses, itemClasses }) => {
	return (
		<nav className={wrapperClasses}>
			<ul className={containerClasses}>
				{components.map(({ component: Component, props }, index) => (
          <li className={itemClasses} key={index}>
            <Component {...props} />
          </li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationList;
