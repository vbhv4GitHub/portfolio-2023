import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const LinkButton = (props: Props) => {
  const linkButtonClasses: string =
    'px-5 py-2 uppercase tracking-wide font-medium rounded-full shadow-md focus:outline-1';
  const variantClasses: string =
    props.variant === 'secondary'
      ? 'text-gray-900 bg-gray-300 hover:bg-gray-400 focus:outline-gray-300'
      : 'text-gray-100 bg-purple-600 hover:bg-purple-500 focus:outline-gray-200';
  return (
    <Link href="#" passHref>
      <a className={linkButtonClasses + ' ' + variantClasses}>{props.children}</a>
    </Link>
  );
};

export default LinkButton;
