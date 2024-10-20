'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

type Props = {
  count: number;
  basePath?: string;
};

const MuiPagination = ({ count, basePath }: Props) => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const page = searchParams.get('page');
  const currentPage = parseInt(page || '1');

  const currentPath = useMemo(() => {
    const path = basePath ? `/${basePath}` : '';
    return slug ? `${path}/${slug}/page` : `${path}/page`;
  }, [basePath, slug]);

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    for (let i = 1; i <= count; i++) {
      if (i === 1 || i === count || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push('...');
      }
    }
    return pageNumbers;
  };

  return (
    <nav className="flex justify-center my-8">
      <ul className="flex space-x-2">
        <PaginationItem page={currentPage - 1} currentPath={currentPath} disabled={currentPage === 1}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </PaginationItem>
        {getPageNumbers().map((pageNumber, index) => (
          <PaginationItem
            key={index}
            page={typeof pageNumber === 'number' ? pageNumber : null}
            currentPath={currentPath}
            current={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationItem>
        ))}
        <PaginationItem page={currentPage + 1} currentPath={currentPath} disabled={currentPage === count}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </PaginationItem>
      </ul>
    </nav>
  );
};

type PaginationItemProps = {
  children: React.ReactNode;
  page: number | null;
  currentPath: string;
  current?: boolean;
  disabled?: boolean;
};

const PaginationItem = ({ children, page, currentPath, current, disabled }: PaginationItemProps) => {
  const baseClasses = 'flex items-center justify-center w-10 h-10 rounded-full';
  const activeClasses = current ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  if (page === null) {
    return <li className={`${baseClasses} ${disabledClasses}`}>{children}</li>;
  }

  return (
    <li>
      <Link href={`${currentPath}/${page}`} className={`${baseClasses} ${activeClasses} ${disabledClasses}`}>
        {children}
      </Link>
    </li>
  );
};

export default MuiPagination;
