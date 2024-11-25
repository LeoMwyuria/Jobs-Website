import { useNavigate } from "react-router-dom";

interface JobCardProps {
    id: string;
    companyName: string;
    logoUrl: string;
    timeAgo: string;
    title: string;
    type: string;
    location: string;
    requirements: string;
    responsibilities: string;
}

const JobCard = ({ id, companyName, logoUrl, timeAgo, title, location, type, requirements, responsibilities }: JobCardProps) => {
    const navigate = useNavigate();
    
    const toJobClick = () => {
        navigate('/job', {
            state: {
                id,
                companyName,
                logoUrl,
                timeAgo,
                title,
                type,
                location,
                requirements,
                responsibilities
            }
        });
    };
    return (
      <div 
  onClick={toJobClick} 
  style={{
    animation: `fadeIn 0.5s ease-out`
  }}
  className="bg-white dark:bg-darkCard rounded-md p-8 relative shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
>
        <div className="absolute -top-6 left-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center" >
            <img src={logoUrl} alt={companyName} className="w-[100%] h-[100%] rounded-xl object-contain" />
          </div>
        </div>
  
        <div className="mt-4">
          <div className="flex items-center gap-3 text-gray-500 dark:text-darkText transition-colors duration-300">
            <span>{timeAgo} • {type}</span>
          </div>
  
          <h2 className="mt-2 text-xl font-bold hover:text-blue-600 cursor-pointer dark:text-white transition-colors duration-300">
            {title}
          </h2>
  
          <p className="text-gray-500 dark:text-darkText mt-2 transition-colors duration-300">{companyName}</p>
  
          <div className="text-gray-500 dark:text-darkText mt-4 transition-colors duration-300">
            <p>
              <strong className="text-countryNameColor">{location}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default JobCard;
  