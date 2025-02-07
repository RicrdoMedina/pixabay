import React from "react";

type SearchIconProps = {
  color?: string;
  width?: number;
  height?: number;
};

const SearchIcon: React.FC<SearchIconProps> = ({ color = "currentColor", width = 24, height = 24 }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.965 17.497l-2.33-2.331a6.577 6.577 0 10-1.469 1.469l2.33 2.33a1.039 1.039 0 001.469-1.468zm-3.157-6.19a4.485 4.485 0 01-1.244 3.106 1.05 1.05 0 00-.15.151 4.5 4.5 0 111.395-3.257z"
      ></path>
    </svg>
  );
};

export default SearchIcon;