import React from "react"
import { Chart, LeftBar, RightBar, Summary } from "../components"

export interface IPersonalPageProps {}

const PersonalPage: React.FunctionComponent<IPersonalPageProps> = (props) => {
	return (
		<div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-lg xl:grid-cols-xl">
			<LeftBar />
			<div className="bg-primary-200 dark:bg-primary-500 flex flex-col">
				<Chart />
				<Summary />
			</div>
			<RightBar />
		</div>
	)
}

export default PersonalPage
