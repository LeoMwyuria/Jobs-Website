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
                <main className="max-w-[730px] mx-auto relative pt-8">
                    <button 
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 mb-4 text-searchColor hover:text-blue-700 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Jobs</span>
                    </button>
                    <div className="bg-white dark:bg-darkCard rounded-md p-8 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                        <img src={logoUrl} alt={companyName} className="w-20 h-20 rounded-xl object-contain" />
                        <div>
                            <h1 className="text-2xl font-bold dark:text-white transition-colors duration-300">{title}</h1>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300">{companyName}</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <div className="flex items-center gap-3 text-gray-500 dark:text-darkText transition-colors duration-300">
                            <span>{timeAgo} • {type}</span>
                            <span className="text-countryNameColor">{location}</span>
                        </div>
                        
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4 dark:text-white transition-colors duration-300">Requirements</h2>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300">{requirements}</p>
                        </div>
                        
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4 dark:text-white transition-colors duration-300">Responsibilities</h2>
                            <p className="text-gray-500 dark:text-darkText transition-colors duration-300">{responsibilities}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </ThemeProvider>
    );
};

export default JobPage;