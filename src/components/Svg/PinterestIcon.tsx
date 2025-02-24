import React from "react";

type IconProps = {
  width?: number;
  height?: number;
  currentColor?: string;
};

const PinterestIcon: React.FC<IconProps> = ({ width = 24, height = 24, currentColor = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={currentColor}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3.999a8 8 0 00-2.916 15.453c-.07-.633-.134-1.607.027-2.298.146-.624.938-3.976.938-3.976s-.239-.48-.239-1.188c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.662 2.664-.189.796.399 1.445 1.184 1.445 1.422 0 2.515-1.499 2.515-3.663 0-1.916-1.376-3.255-3.342-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .687.265 1.425.595 1.826a.24.24 0 01.056.23l-.223.906c-.034.147-.116.178-.267.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.776 0 4.932 1.977 4.932 4.62 0 2.758-1.738 4.977-4.151 4.977-.81 0-1.573-.422-1.834-.92l-.498 1.903c-.181.695-.669 1.566-.995 2.097A8 8 0 1012 4z"></path>
    </svg>
  );
};

export default PinterestIcon;