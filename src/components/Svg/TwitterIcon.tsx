import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  currentColor?: string;
};

const TwitterIcon: React.FC<IconProps> = ({ width = 24, height = 24, currentColor = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={currentColor}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M18.993 7.283c.722-.477 1.276-1.232 1.537-2.131a6.612 6.612 0 01-2.22.935c-.636-.749-1.544-1.217-2.55-1.217-1.929 0-3.493 1.725-3.493 3.852 0 .302.03.596.09.878-2.903-.16-5.478-1.694-7.2-4.025a4.14 4.14 0 00-.474 1.937c0 1.337.617 2.516 1.555 3.206a3.237 3.237 0 01-1.583-.481v.048c0 1.867 1.204 3.424 2.802 3.778a3.198 3.198 0 01-1.577.066c.444 1.53 1.734 2.644 3.263 2.675-1.195 1.033-2.702 1.649-4.339 1.649-.282 0-.56-.018-.833-.054 1.546 1.093 3.382 1.731 5.355 1.731 6.427 0 9.94-5.87 9.94-10.961 0-.167-.003-.333-.01-.498A7.547 7.547 0 0021 6.677c-.627.306-1.3.513-2.007.606z"></path>
    </svg>
  );
};

export default TwitterIcon;