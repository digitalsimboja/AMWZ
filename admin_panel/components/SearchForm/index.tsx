import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  return (
    <div className="flex items-center">
      <div className="flex items-center rounded-sm border border-gray-300 sm:w-64">
        <span className="px-3 text-custom-yellow">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-4 border-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent flex-1 text-sm"
        />
      </div>
    </div>
  );
}
