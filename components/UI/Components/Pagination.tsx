import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import RightArrowIcon from 'components/UI/SvgIcons/RightArrowIcon';
import LeftArrowIcon from 'components/UI/SvgIcons/LeftArrowIcon';

type Props = {
  path: string;
  totalPages: number;
  currentPage: number | string;
};

function generatePaginationItems(currentPage: number, totalPages: number) {
  const temp = [];

  if (totalPages < 9) {
    for (let i = 1; i <= totalPages; i++) {
      temp.push(i);
    }
  } else {
    temp.push(1);

    currentPage > 4 ? temp.push('...') : temp.push(2);

    currentPage > 4
      ? currentPage > totalPages - 3
        ? temp.push(totalPages - 4)
        : temp.push(currentPage - 1)
      : temp.push(3);

    currentPage > 4
      ? currentPage > totalPages - 3
        ? temp.push(totalPages - 3)
        : temp.push(currentPage)
      : temp.push(4);

    currentPage > 4
      ? currentPage > totalPages - 3
        ? temp.push(totalPages - 2)
        : temp.push(currentPage + 1)
      : temp.push(5);

    currentPage > totalPages - 3 ? temp.push(totalPages - 1) : temp.push('...');

    temp.push(totalPages);
  }

  return temp;
}

const Pagination = ({ path, totalPages, currentPage }: Props) => {
  const page = Number(currentPage);
  const paginationItems = generatePaginationItems(page, totalPages);

  const isPreviousLinkInactive = clsx({ 'pointer-events-none': page === 1 });
  const isNextLinkInactive = clsx({ 'pointer-events-none': page === totalPages });

  return (
    <nav aria-label="Pagination" className="flex justify-center py-4">
      <ul className="flex items-center h-8 mx-auto -space-x-px text-sm text-white">
        <li className={isPreviousLinkInactive}>
          <Link
            aria-label="Previous Page"
            href={`${path}/page/${page - 1}`}
            className={clsx(
              'flex items-center justify-center h-8 px-3 leading-tight rounded-l-lg',
              isPreviousLinkInactive ? 'text-[#232323]' : 'hover:bg-gray-800'
            )}
          >
            <LeftArrowIcon />
          </Link>
        </li>
        {paginationItems.map((item, idx) => {
          const activePageClass = clsx({ 'bg-gray-800': item === page });
          const isItemClickable = clsx({ 'pointer-events-none': item === '...' });

          return (
            <li key={idx} className={isItemClickable}>
              <Link
                aria-label={`Page ${item}`}
                href={`${path}/page/${item}`}
                className={clsx(
                  activePageClass,
                  isItemClickable ? null : 'hover:bg-gray-800',
                  'flex items-center justify-center h-8 px-2 leading-tight rounded-md'
                )}
              >
                {item}
              </Link>
            </li>
          );
        })}
        <li className={isNextLinkInactive}>
          <Link
            aria-label="Next Page"
            href={`${path}/page/${page + 1}`}
            className={clsx(
              'flex items-center justify-center h-8 px-3 leading-tight rounded-r-lg',
              isNextLinkInactive ? 'text-[#232323]' : 'hover:bg-gray-800'
            )}
          >
            <RightArrowIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
