import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
};

const LinkButton = ({ children, href, variant = 'primary' }: Props) => {
  const baseClasses =
    'inline-block px-5 py-2 rounded-full font-medium uppercase tracking-wide text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';

  return (
    <Link href={href} passHref>
      <a className={`${baseClasses} ${variantClasses}`}>{children}</a>
    </Link>
  );
};

export default LinkButton;
