import React from 'react';
import Link from 'next/link';

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const TagCapsule = ({ href, children, className = '', ...props }: Props) => {
  return (
    <Link
      href={href}
      className={`
          inline-block px-3 py-1 mr-2 mb-2
          text-sm font-medium
          bg-gray-200 text-gray-700
          rounded-full
          hover:bg-gray-300 transition-colors duration-200
          ${className}
        `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TagCapsule;
