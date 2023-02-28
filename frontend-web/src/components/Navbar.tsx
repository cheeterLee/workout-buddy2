import React, { useEffect } from "react"
import { BsPerson, BsTelephone } from 'react-icons/bs'
import { BiHome, BiMoon, BiSun } from 'react-icons/bi'
import Navlink from "./Navlink"
import Navbutton from "./Navbutton"
import { useDarkMode } from "../hooks/useDarkMode"

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const [darkTheme, setDarkTheme] = useDarkMode()

    // @ts-ignore
	const switchTheme = () => setDarkTheme(!darkTheme)

	return (
		<div className="bg-primary-400 dark:bg-primary-900 w-screen flex justify-center items-center h-24 gap-14
        drop-shadow-md">
			<div className='flex justify-center items-center shrink-0 cursor-pointer'>
                <img className="w-32 h-32" src='/logo_transparent.png' alt="logo" />
            </div>
			<div>
				<ul className="flex items-center text-yellow-600 gap-8">
                    <Navlink icon={<BiHome />} name='Home'/>
                    <Navlink icon={<BsPerson />} name='Personal'/>
                    <Navlink icon={<BsTelephone />} name='Contact'/>
				</ul>
			</div>
            <div className="flex items-center gap-1">
                {/* <ThemeSwitcher icon={darkTheme ? <BiMoon /> : <BiSun />} /> */}
                <div onClick={switchTheme}
			        className="bg-primary-300 dark:bg-primary-800 py-1 px-1 rounded-lg text-yellow-600 h-10 w-10 flex justify-center items-center cursor-pointer">
                    {darkTheme ? <BiMoon /> : <BiSun />}
                </div>
                <Navbutton text='logout'/>
            </div>
		</div>
	)
}

export default Navbar
