import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  href: string;
};

const InternalLink = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <a className="inline-block px-4 py-2 text-blue-600 transition-colors duration-300 bg-white border border-blue-600 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        {children}
      </a>
    </Link>
  );
};

export default InternalLink;
