import React, { ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
  children: ReactNode;
  component?: HeadingLevel;
  className?: string;
};

const headingClasses: Record<HeadingLevel, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
};

const Heading = ({ children, component = 'h1', className = '' }: Props) => {
  const HeadingTag = component;
  const baseClasses = 'text-center font-semibold';
  const combinedClasses = `${baseClasses} ${headingClasses[component]} ${className}`;

  return <HeadingTag className={combinedClasses}>{children}</HeadingTag>;
};

export default Heading;
