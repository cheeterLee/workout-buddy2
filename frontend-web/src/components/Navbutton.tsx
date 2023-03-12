import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLogout } from "../state"
import { RootState } from "../state/store"

export interface INavbuttonProps {
	text: string
}

const Navbutton: React.FunctionComponent<INavbuttonProps> = ({ text }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.auth.user)

	const handleNavigateClicked = () => {
		navigate("/login")
	}

	const handleLogoutClicked = () => {
		dispatch(
			setLogout({
				user: null,
				token: null,
			})
		)
		setTimeout(() => {
			navigate("/login")
		}, 0)
	}

	return (
		<button
			onClick={user ? handleLogoutClicked : handleNavigateClicked}
			className="bg-primary-300 hover:bg-primary-200 dark:bg-primary-800 dark:hover:bg-primary-700 py-1 px-3 rounded-lg text-primary-800 dark:text-yellow-500 h-10 w-32"
		>
			{text}
		</button>
	)
}

export default Navbutton
