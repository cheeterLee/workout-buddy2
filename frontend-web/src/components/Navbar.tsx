import React from "react"
import { BsPerson, BsTelephone } from 'react-icons/bs'
import { BiHome, BiMoon, BiSun } from 'react-icons/bi'
import Navlink from "./Navlink"
import Navbutton from "./Navbutton"
import ThemeSwitcher from "./ThemeSwitcher"

export interface INavbarProps {}


const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
	return (
		<div className="bg-neutral-600 w-screen flex justify-center items-center h-20 gap-14
        drop-shadow-md">
			<div className='flex justify-center items-center shrink-0'>
                <img className="w-32" src='../../public/logo_transparent.png' alt="logo" />
            </div>
			<div>
				<ul className="flex items-center text-yellow-600 gap-8">
                    <Navlink icon={<BiHome />} name='Home'/>
                    <Navlink icon={<BsPerson />} name='Personal'/>
                    <Navlink icon={<BsTelephone />} name='Contact'/>
				</ul>
			</div>
            <div className="flex items-center gap-1">
                <ThemeSwitcher icon={<BiMoon />} />
                <Navbutton text='logout'/>
            </div>
		</div>
	)
}

export default Navbar