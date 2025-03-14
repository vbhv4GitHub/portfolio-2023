import React from 'react';

type Props = {
  arr: string[];
  className?: string;
};

const HorizontalTags: React.FC<Props> = ({ arr, className = '' }) => {
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {arr.map((tag, idx) => (
        <span key={idx} className="px-2 py-1 mb-2 mr-2 text-sm text-gray-200 rounded-full bg-gray-800/80">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default HorizontalTags;
