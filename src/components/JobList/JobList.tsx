import { useState, useEffect, useMemo } from 'react';
import JobCard from '../JobCard/JobCard';

interface Job {
  location: string;
  type: string;
  id: string;
  title: string;
  companyName: string;
  logoUrl: string;
  requirements: string;
  responsibilities: string;
  timeAgo: string;
}
interface JobListProps {
  searchFilters: {
    keyword: string;
    location: string;
    fullTimeOnly: boolean;
  };
}



const JobList = ({ searchFilters }: JobListProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jobs-api-7iu1.onrender.com/jobs`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.items);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const jobTitle = job.title.toLowerCase();
      const jobCompany = job.companyName.toLowerCase();
      const jobLocation = job.location.toLowerCase();
      const searchKeyword = searchFilters.keyword.toLowerCase();
      const searchLocation = searchFilters.location.toLowerCase();

      const keywordMatch = !searchKeyword || 
        jobTitle.includes(searchKeyword) || 
        jobCompany.includes(searchKeyword);

      const locationMatch = !searchLocation || 
        jobLocation.includes(searchLocation);

      const typeMatch = !searchFilters.fullTimeOnly || 
        job.type === "Full Time";  

      return keywordMatch && locationMatch && typeMatch;
    });
  }, [jobs, searchFilters]);

  const totalPages = useMemo(() => Math.ceil(filteredJobs.length / itemsPerPage), [filteredJobs.length]);

  const currentJobs = useMemo(() => {
    return filteredJobs.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredJobs, currentPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-searchColor"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {currentJobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          companyName={job.companyName}
          logoUrl={job.logoUrl}
          timeAgo={job.timeAgo}
          title={job.title}
          location={job.location}
          type={job.type}
          requirements={job.requirements}
          responsibilities={job.responsibilities}
        />
      ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
  <div className="flex justify-center gap-2 mt-8 mb-8">
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100 transition-colors"
    >
      Previous
    </button>

    {[...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      if (
        pageNumber === 1 ||
        pageNumber === totalPages ||
        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
      ) {
        return (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentPage === pageNumber
                ? 'bg-searchColor text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {pageNumber}
          </button>
        );
      } else if (
        pageNumber === currentPage - 2 ||
        pageNumber === currentPage + 2
      ) {
        return <span key={pageNumber} className="px-2">...</span>;
      }
      return null;
    })}

    <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100 transition-colors"
    >
      Next
    </button>
  </div>
)}
    </div>
  );
};

export default JobList;