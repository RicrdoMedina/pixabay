import React from 'react';

type ButtonProps = {
	className: string;
	type?: 'button' | 'submit' | 'reset';
	label?: string;
	icon?: React.ReactNode;
  dataTestid?: string,
	iconPosition?: 'left' | 'right';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  className = 'w-full flex items-center justify-center',
  icon,
  iconPosition = 'left',
  type = 'button',
  label = '',
  dataTestid,
  onClick
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      aria-label={label}
      data-testid={dataTestid}
    >
      {icon && iconPosition === 'left' && <span>{icon} </span>}
      <span>{label}</span>
      {icon && iconPosition === 'right' && <span> {icon}</span>}
    </button>
  );
};
export default Button