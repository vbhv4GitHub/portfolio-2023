import React from 'react';

type Props = {
  my?: number | string;
  className?: string;
};

const MuiDivider = ({ my = 5, className = '' }: Props) => {
  const marginClass = typeof my === 'number' ? `my-${my}` : `my-[${my}]`;

  return <hr className={`border-t border-gray-300 ${marginClass} ${className}`} />;
};

export default MuiDivider;
