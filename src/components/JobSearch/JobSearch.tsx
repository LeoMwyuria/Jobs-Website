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
    <div className="w-[100%] ml-auto mr-auto bg-white dark:bg-darkCard shadow-sm rounded-lg p-4 h-[80px] relative bottom-5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="flex-1 flex items-center rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-searchColor mr-2" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Filter by title, companies, expertise..."
            className="w-full outline-none text-gray-600 dark:text-darkText dark:bg-darkCard dark:placeholder-gray-400 transition-colors duration-300"
          />
        </div>

        <div className="flex-1 flex items-center rounded-lg px-3 py-2">
        <MapPin className="w-5 h-5 text-searchColor mr-2" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Filter by location..."
          className="w-full border-none outline-none text-gray-600 dark:text-darkText dark:bg-darkCard dark:placeholder-gray-400 transition-colors duration-300"
        />
      </div>

        <div className="flex items-center gap-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={fullTimeOnly}
              onChange={(e) => setFullTimeOnly(e.target.checked)}
              className="w-5 h-5"
            />
            <span className="ml-2 text-sm text-gray-600 font-bold">
              Full Time Only
            </span>
          </label>
        </div>

        <button
          onClick={handleSearch}
          className="bg-searchColor hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;