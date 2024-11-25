import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';

interface JobSearchProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    fullTimeOnly: boolean;
  }) => void;
}

const JobSearch = ({ onSearch }: JobSearchProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [activeInput, setActiveInput] = useState('');

  const handleSearch = () => {
    onSearch({
      keyword: keyword.toLowerCase(),
      location: location.toLowerCase(),
      fullTimeOnly,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full bg-white dark:bg-darkCard shadow-sm hover:shadow-lg rounded-lg p-4 h-auto md:h-[80px] relative bottom-5 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className={`flex-1 flex items-center rounded-lg px-3 py-2 transition-all duration-300 ${activeInput === 'keyword' ? 'scale-105' : ''}`}>
          <Search className="w-5 h-5 text-searchColor mr-2" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setActiveInput('keyword')}
            onBlur={() => setActiveInput('')}
            placeholder="Filter by title, companies, expertise..."
            className="w-full outline-none text-gray-600 dark:text-darkText dark:bg-darkCard dark:placeholder-gray-400 border-b md:border-b-0 border-gray-200 pb-2 md:pb-0 transition-all duration-300 focus:placeholder-searchColor"
          />
        </div>

        <div className={`flex-1 flex items-center rounded-lg px-3 py-2 transition-all duration-300 ${activeInput === 'location' ? 'scale-105' : ''}`}>
          <MapPin className="w-5 h-5 text-searchColor mr-2" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setActiveInput('location')}
            onBlur={() => setActiveInput('')}
            placeholder="Filter by location..."
            className="w-full outline-none text-gray-600 dark:text-darkText dark:bg-darkCard dark:placeholder-gray-400 border-b md:border-b-0 border-gray-200 pb-2 md:pb-0 transition-all duration-300 focus:placeholder-searchColor"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="inline-flex items-center cursor-pointer group">
            <input
              type="checkbox"
              checked={fullTimeOnly}
              onChange={(e) => setFullTimeOnly(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-darkText font-bold group-hover:text-searchColor transition-colors duration-300">
              Full Time Only
            </span>
          </label>
        </div>

        <button
          onClick={handleSearch}
          className="bg-searchColor hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default JobSearch;