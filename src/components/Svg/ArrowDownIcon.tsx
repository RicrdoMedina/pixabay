import React from "react";

type IconProps = {
  color?: string;
  width?: number | string;
  height?: number | string;
};

const ArrowDownIcon: React.FC<IconProps> = ({
  color = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M16.227 9.304a1.038 1.038 0 111.469 1.469l-4.846 4.846a1.038 1.038 0 01-1.469 0l-4.846-4.846a1.038 1.038 0 011.469-1.469l4.111 4.112 4.112-4.112z"></path>
    </svg>
  );
};

export default ArrowDownIcon;
