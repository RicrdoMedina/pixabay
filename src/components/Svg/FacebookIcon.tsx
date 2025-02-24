import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  currentColor?: string;
};

const FacebookIcon: React.FC<IconProps> = ({ width = 24, height = 24, currentColor = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={currentColor}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M20 12.049C20 7.603 16.419 4 12 4 7.581 4 4 7.603 4 12.05c0 4.018 2.925 7.347 6.75 7.951v-5.625H8.719V12.05h2.031v-1.773c0-2.017 1.194-3.132 3.022-3.132.875 0 1.79.157 1.79.157v1.981h-1.009c-.994 0-1.303.621-1.303 1.258v1.509h2.219l-.355 2.326H13.25V20c3.825-.604 6.75-3.933 6.75-7.951z"></path>
    </svg>
  );
};

export default FacebookIcon;
