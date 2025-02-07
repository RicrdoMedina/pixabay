import React from 'react';

interface UploadIconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

const UploadIcon: React.FC<UploadIconProps> = ({
  height = 24,
  width = 24,
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      color={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.965 8.927l.997-.997v6.493a1.038 1.038 0 102.077 0V7.93l.996.997a1.039 1.039 0 001.469-1.469l-2.77-2.77a1.038 1.038 0 00-1.468 0l-2.77 2.77a1.038 1.038 0 001.47 1.469zm-3.503 1.688c-.574 0-1.039.465-1.039 1.039v5.538a2.423 2.423 0 002.423 2.423h8.308a2.423 2.423 0 002.423-2.423v-5.538a1.038 1.038 0 10-2.077 0v5.538a.346.346 0 01-.346.346H7.846a.346.346 0 01-.346-.346v-5.538c0-.574-.465-1.039-1.038-1.039z"
      />
    </svg>
  );
};

export default UploadIcon;
