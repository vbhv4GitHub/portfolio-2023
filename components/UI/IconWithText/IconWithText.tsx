import React from 'react';

type Props = {
  text: string;
  icon: React.ReactNode;
  className?: string;
};

const IconWithText = ({ text, icon, className = '' }: Props) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default IconWithText;
