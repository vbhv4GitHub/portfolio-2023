const SearchBox = () => {
  return (
    <form className="relative" method="get" action="/search">
      <input
        type="text"
        name="query"
        className="w-full py-2 pl-4 pr-10 text-gray-800 border border-gray-300 rounded-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search a blog post"
        aria-label="Search a blog post"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 mt-2 mr-3 text-gray-800 hover:text-gray-600"
        aria-label="search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchBox;
