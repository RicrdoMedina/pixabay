import React, { JSX } from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`heading heading-${level} ${className}`}>{children}</Tag>;
};

export default Heading;
