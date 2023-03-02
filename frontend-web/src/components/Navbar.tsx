import React, { useState } from "react"
import { BsPerson, BsTelephone } from "react-icons/bs"
import { BiHome, BiMoon, BiSun, BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import Navlink from "./Navlink"
import Navbutton from "./Navbutton"
import { useDarkMode } from "../hooks/useDarkMode"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
	const [darkTheme, setDarkTheme] = useDarkMode()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const user = useSelector((state: RootState) => state.auth.user)
	console.log("user:", user)

	// @ts-ignore
	const switchTheme = () => setDarkTheme(!darkTheme)

	const handleClick = () => setIsOpen((prev) => !prev)

	return (
		<>
			<div
				className="bg-primary-400 dark:bg-primary-900 w-screen flex sm:justify-center items-center h-24 gap-14
        drop-shadow-md"
			>
				<div className="hidden sm:flex justify-center items-center shrink-0 cursor-pointer">
					<img
						className="w-32 h-32"
						src="/logo_transparent.png"
						alt="logo"
					/>
				</div>
				<div>
					<ul className="hidden sm:flex items-center text-primary-900 dark:text-yellow-500 gap-8">
						<Navlink icon={<BiHome />} name="Home" />
						<Navlink icon={<BsPerson />} name="Analytics" />
						<Navlink icon={<BsTelephone />} name="Contact" />
					</ul>
				</div>
				<div className="hidden sm:flex items-center gap-1">
					<div
						onClick={switchTheme}
						className="bg-primary-300 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 py-1 px-1 rounded-lg text-primary-800 dark:text-yellow-500 h-10 w-10 flex justify-center items-center cursor-pointer"
					>
						{darkTheme ? <BiMoon /> : <BiSun />}
					</div>
					<Navbutton text={user ? 'logout' : 'login'} />
				</div>
				<div
					onClick={handleClick}
					className="flex sm:hidden text-3xl text-primary-800 dark:text-yellow-500 bg-primary-300 hover:bg-primary-200 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-md p-1 cursor-pointer drop-shadow-md"
				>
					<BiMenu />
				</div>
			</div>
			<div
				className={`${
					isOpen ? "block h-screen" : "hidden h-0"
				} w-screen absolute z-10 top-0 bg-primary-300 dark:bg-primary-800 sm:hidden py-8 px-14`}
			>
				<div
					onClick={() => handleClick()}
					className="text-3xl text-primary-800 dark:text-yellow-500 bg-primary-400 hover:bg-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 cursor-pointer rounded-md p-1 w-10 h-10 drop-shadow-md flex justify-center items-centers"
				>
					<AiOutlineClose />
				</div>

				<ul className="text-base flex flex-col items-center gap-4 text-primary-800 dark:text-yellow-500 py-6">
					<Navlink icon={<BiHome />} name="Home" />
					<Navlink icon={<BsPerson />} name="Analytics" />
					<Navlink icon={<BsTelephone />} name="Contact" />
				</ul>
			</div>
		</>
	)
}

export default Navbar
