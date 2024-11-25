import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import darkmode from '../../assets/darkMode.png'
import lightmode from '../../assets/lightMode.png'
const Header = () => {
  return (
    <header className=" bg-headerBackground  w-[100%] h-[120px] rounded-bl-[100px] flex items-center justify-center">
        <div className=" w-[60%] flex justify-between">
        <a className="text-white text-2xl font-bold" href="/">Recruiter</a>
        <div className="flex gap-3 items-center">
            <div>
            <img src={lightmode} alt="" />
            </div>
            <ToggleSwitch />
            <div>
            <img src={darkmode} alt="" />
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
