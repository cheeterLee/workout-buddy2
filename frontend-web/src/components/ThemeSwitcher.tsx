import React from "react"

export interface IThemeSwitcherProps {
	icon: JSX.Element
}

const ThemeSwitcher: React.FunctionComponent<IThemeSwitcherProps> = ({
	icon,
}) => {
	return (
		<div
			className="bg-neutral-700 py-1 px-1 rounded-lg text-yellow-600 h-10 w-10 flex justify-center items-center cursor-pointer
    "
		>
			{icon}
		</div>
	)
}

export default ThemeSwitcher
