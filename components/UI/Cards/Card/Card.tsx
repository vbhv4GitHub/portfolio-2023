import dayjs from 'dayjs';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

const Card = (post: Post) => {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden text-white bg-gray-800 rounded-lg shadow-md">
      <div className="block p-4 sm:p-6">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="mb-2 text-lg font-semibold text-blue-300 truncate sm:text-xl">{post.title}</h2>
        </Link>
        <div className="flex items-center mb-3 text-xs text-gray-200 sm:mb-4 sm:text-sm">
          <svg
            className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
        </div>
        <p className="mb-3 text-sm text-gray-300 sm:mb-4 sm:text-base line-clamp-2 sm:line-clamp-3">
          {post.description}
        </p>
        <div className="flex flex-wrap items-center">
          <svg
            className="w-3 h-3 mr-1 text-gray-400 sm:w-4 sm:h-4 sm:mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          {post.tags.map((tag: string, idx: number) => (
            <Link key={idx} href={`/tags/${tag}`}>
              <span className="px-2 py-1 mb-1 mr-1 text-xs text-gray-700 bg-gray-200 rounded sm:mb-2 sm:mr-2 sm:text-sm">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
