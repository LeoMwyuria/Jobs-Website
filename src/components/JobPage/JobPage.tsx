import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { ArrowLeft } from 'lucide-react';
import { ThemeProvider } from '../ThemeContext/ThemeContext';

const JobPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <Navigate to="/" replace />;
    }

    const {
        companyName,
        logoUrl,
        timeAgo,
        title,
        type,
        location,
        requirements,
        responsibilities
    } = state;

    return (
        <ThemeProvider>
        <Header />
        <div className="min-h-screen bg-[#EEE] dark:bg-darkBg transition-colors duration-300">
            <main className="w-[90%] md:w-[80%] lg:max-w-[730px] mx-auto relative pt-8 px-4 md:px-0">
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 mb-4 text-searchColor hover:text-blue-700 transition-colors duration-300"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Jobs</span>
                </button>
                <div className="bg-white dark:bg-darkCard rounded-md p-4 md:p-8 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <img src={logoUrl} alt={companyName} className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain" />
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold dark:text-white transition-colors duration-300">{title}</h1>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300">{companyName}</p>
                        </div>
                    </div>
                    
                    <div className="mt-6 md:mt-8">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-gray-500 dark:text-darkText transition-colors duration-300">
                            <span>{timeAgo} • {type}</span>
                            <span className="text-countryNameColor">{location}</span>
                        </div>
                        
                        <div className="mt-6 md:mt-8">
                            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 dark:text-white transition-colors duration-300">Requirements</h2>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300 text-sm md:text-base">{requirements}</p>
                        </div>
                        
                        <div className="mt-6 md:mt-8">
                            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 dark:text-white transition-colors duration-300">Responsibilities</h2>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300 text-sm md:text-base">{responsibilities}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </ThemeProvider>
    );
};

export default JobPage;