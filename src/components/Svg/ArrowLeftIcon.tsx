import React from 'react';

type IconProps = {
  color?: string;
  width?: number | string;
  height?: number | string;
};

const ArrowLeftIcon: React.FC<IconProps> = ({ color = 'currentColor', width = 24, height = 24 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      width={width}
      height={height}
    >
      <path d="M15.273 16.573a1.038 1.038 0 11-1.469 1.469l-4.846-4.846a1.038 1.038 0 010-1.469l4.846-4.846a1.038 1.038 0 111.469 1.469L11.16 12.46l4.112 4.112z"></path>
    </svg>
  );
};

export default ArrowLeftIcon;
