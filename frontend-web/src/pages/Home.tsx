import React from "react"
import { Calender, Recommendation } from "../components"
import WorkoutCount from "../components/CreateWorkoutForm"
import WorkoutList from "../components/WorkoutsList"

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
	return (
		<div className="flex px-10 py-6 w-screen h-screen gap-4">
			<div className="hidden sm:flex sm:flex-col sm:w-[300px] md:w-[400px] lg:w-[550px] xl:w-[700px] h-[100%] gap-4">
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

export default HomePage
