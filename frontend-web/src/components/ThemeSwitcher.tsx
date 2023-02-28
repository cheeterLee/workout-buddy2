import React from "react"
import { useDarkMode } from "../hooks/useDarkMode"

export interface IThemeSwitcherProps {
	icon: JSX.Element
}

const ThemeSwitcher: React.FunctionComponent<IThemeSwitcherProps> = ({
	icon,
}) => {
	const [darkTheme, setDarkTheme] = useDarkMode()

	// @ts-ignore
	const switchTheme = () => setDarkTheme(!darkTheme)

	return (
		<div
			onClick={switchTheme}
			className="bg-primary-300 dark:bg-primary-800 py-1 px-1 rounded-lg text-yellow-600 h-10 w-10 flex justify-center items-center cursor-pointer
    "
		>
			{icon}
		</div>
	)
}

export default ThemeSwitcher
