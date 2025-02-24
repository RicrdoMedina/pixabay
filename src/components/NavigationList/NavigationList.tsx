import React from 'react';

type ComponentWithProps = {
	component: React.ElementType;
	props?: Record<string, any>;
};

type RendererProps = {
	components: ComponentWithProps[];
};

const NavigationList: React.FC<RendererProps> = ({ components }) => {
	return (
		<nav>
			<ul className='flex items-center justify-between'>
				{components.map(({ component: Component, props }, index) => (
          <li key={index}>
            <Component {...props} />
          </li>
				))}
			</ul>
		</nav>
	);
};

export default NavigationList;
