import dayjs from 'dayjs';
import Link from 'next/link';
import { FaTag } from 'react-icons/fa';
import { Post } from 'contentlayer/generated';
import { FaCalendarDay } from 'react-icons/fa6';

const Card = (post: Post) => {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden text-white bg-gray-900 rounded-lg shadow-md">
      <div className="block p-4 sm:p-6">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="mb-2 text-lg font-semibold text-blue-300 truncate sm:text-xl">{post.title}</h2>
        </Link>
        <div className="flex items-center mb-3 text-xs text-gray-200 sm:mb-4 sm:text-sm">
          <FaCalendarDay className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
          <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
        </div>
        <p className="mb-3 text-sm text-gray-300 sm:mb-4 sm:text-sm line-clamp-2 sm:line-clamp-3">{post.description}</p>
        <div className="flex flex-wrap items-center">
          <FaTag className="w-4 h-4 my-auto mr-2 sm:w-5 sm:h-5 sm:mr-3" />
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
