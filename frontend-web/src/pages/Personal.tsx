import React from "react"
import { Chart, Summary } from "../components"

export interface IPersonalPageProps {}

const PersonalPage: React.FunctionComponent<IPersonalPageProps> = (props) => {
	return (
		<div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-lg xl:grid-cols-xl">
			<div className="hidden lg:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500"></div>
			<div className="bg-primary-200 dark:bg-primary-500 flex flex-col">
				<Chart />
				<Summary />
			</div>
			<div className="hidden xl:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500"></div>
		</div>
	)
}

export default PersonalPage
