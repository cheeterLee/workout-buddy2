import React from "react"
import { Workout } from "../types"
import WorkoutCard from "./WorkoutCard"

export interface IRecommendationProps {}

const Recommendation: React.FunctionComponent<IRecommendationProps> = () => {
	const recommendWorkoutList: Workout[] = [
		{ name: "bench press", reps: 8, load: 60 },
		{ name: "shoulder press", reps: 10, load: 20 },
	]

	return (
		<div className="bg-primary-300 dark:bg-primary-700 rounded-md flex-1 drop-shadow-md flex flex-col p-1">
			<h3 className="text-primary-800 dark:text-yellow-400 text-center font-mono font-semibold py-1">
				Drag right to add 👉🏼
			</h3>
			<div className="flex flex-col gap-1">
				{recommendWorkoutList.map((workout, index) => (
					<WorkoutCard workout={workout} />
				))}
			</div>
		</div>
	)
}

export default Recommendation
