import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  currentColor?: string;
};

const CustomLogo: React.FC<IconProps> = ({ width = 120, height = 33, currentColor = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 120 33"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={currentColor}
    >
      <path d="M9.059 7.279c4.417-.1 8.564 3.492 9.03 7.897.56 3.872-1.72 7.893-5.287 9.464-2.163 1.073-4.604.743-6.93.798H3.599v7.28H.002c.007-5.617-.014-11.234.01-16.85.12-4.186 3.545-7.932 7.682-8.49.45-.066.91-.1 1.365-.1v.001zm0 14.56c2.596.064 5.03-1.96 5.42-4.533.517-2.588-1.135-5.37-3.66-6.146-2.438-.866-5.372.272-6.564 2.575-.922 1.576-.594 3.434-.656 5.167v2.938h5.46v-.001zM19.826 7.191h3.557v18.16h-3.556V7.19l-.001.001zm14.25 11.42h.13l5.057 6.745h4.41l-6.874-9.34L42.895 7.2h-4.41l-4.28 6.225h-.128l-4.28-6.224h-4.41l6.095 8.818-6.873 9.336h4.41l5.057-6.744z" fill={currentColor} fillRule="nonzero" />
    </svg>
  );
};

export default CustomLogo;
