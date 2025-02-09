import { SVGProps } from 'react';

const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      role="img"
      fill="none"
      width={20}
      height={12}
      aria-hidden="true"
      viewBox="0 0 6 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Left Arrow Icon</title>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
    </svg>
  );
};

export default LeftArrowIcon;
