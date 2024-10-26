import React, { ReactNode } from 'react';

type Props = React.HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  component?: 'p' | 'span' | 'div';
};

const Text = ({ children, component = 'p', className = '', ...rest }: Props) => {
  const Component = component;

  const baseClasses = 'text-center';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
