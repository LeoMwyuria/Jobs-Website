import { useTheme } from "../ThemeContext/ThemeContext";


const ToggleSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div 
      className="w-14 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out"
      style={{ backgroundColor: isDarkMode ? '#4F46E5' : '#E5E7EB' }}
      onClick={toggleDarkMode}
    >
      <div 
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;