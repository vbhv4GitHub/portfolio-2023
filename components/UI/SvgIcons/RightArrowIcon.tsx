import { SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      role="img"
      width={20}
      height={12}
      fill="none"
      viewBox="0 0 6 10"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Right Arrow Icon</title>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
  );
};

export default RightArrowIcon;
