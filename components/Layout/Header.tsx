import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className = '' }: Props) => {
  return <h1 className={`text-3xl font-bold text-gray-100 mb-8 text-center ${className}`}>{children}</h1>;
};

export default Header;
