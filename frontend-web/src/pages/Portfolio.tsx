import React from "react"
import { Calender, Recommendation } from "../components"
import WorkoutCount from "../components/WorkoutsCount"
import WorkoutList from "../components/WorkoutsList"

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
	return (
		<div className="flex px-10 py-6 w-screen h-screen gap-4">
			<div className="flex flex-col h-[100%] gap-4">
				<Calender />
				<Recommendation />
			</div>
			<div className="flex flex-col flex-1 gap-4">
				<WorkoutCount />
				<WorkoutList />
			</div>
		</div>
	)
}

export default PortfolioPage
