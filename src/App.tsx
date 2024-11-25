import { useState } from 'react';
import Header from "./components/Header/Header";
import JobSearch from "./components/JobSearch/JobSearch";
import JobList from "./components/JobList/JobList";
import { ThemeProvider } from './components/ThemeContext/ThemeContext';

function App() {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    location: '',
    fullTimeOnly: false,
  });

  const handleSearch = (filters: typeof searchFilters) => {
    setSearchFilters(filters);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-darkBg">
        <Header />
        <div className="w-[90%] md:w-[80%] lg:w-[61%] ml-auto mr-auto">
          <JobSearch onSearch={handleSearch} />
          <br />
          <JobList searchFilters={searchFilters} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;