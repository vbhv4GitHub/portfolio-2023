import dayjs from 'dayjs';
import Link from 'next/link';
import { FaTag } from 'react-icons/fa';
import { Post } from 'contentlayer/generated';
import { FaCalendarDay } from 'react-icons/fa6';

const Card = (post: Post) => {
  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden transition-all duration-300 rounded-lg shadow-lg bg-gray-900/80 hover:shadow-2xl hover:bg-gray-900 hover:-translate-y-1">
      <div className="block p-5 sm:p-7">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="mb-3 text-lg font-bold text-blue-400 transition-colors duration-300 hover:text-blue-300 sm:text-xl">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center mb-4 text-xs text-gray-300 sm:text-sm">
          <FaCalendarDay className="w-3 h-3 mr-2 text-blue-400 sm:w-4 sm:h-4" />
          <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base line-clamp-2 sm:line-clamp-3">
          {post.description}
        </p>
        <div className="flex flex-wrap items-center gap-1">
          <FaTag className="w-4 h-4 my-auto mr-2 text-blue-400 sm:w-5 sm:h-5" />
          {post.tags.map((tag: string, idx: number) => (
            <Link key={idx} href={`/tags/${tag}`}>
              <span className="px-3 py-1 text-xs text-gray-200 transition-colors duration-300 rounded-full bg-gray-800/80 hover:bg-gray-700 sm:text-sm">
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
