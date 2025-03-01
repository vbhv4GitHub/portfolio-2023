import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <form className="relative" method="get" action="/search">
      <input
        type="text"
        name="query"
        placeholder="Search a blog post"
        aria-label="Search a blog post"
        className="w-full py-2 pl-4 pr-10 text-base text-gray-300 border border-gray-300 rounded-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        aria-label="search"
        className="absolute right-0 mr-3 text-gray-800 transform -translate-y-1/2 top-1/2 hover:text-gray-600"
      >
        <FaSearch className="text-gray-600" />
      </button>
    </form>
  );
};

export default SearchBox;
