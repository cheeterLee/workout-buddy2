import React from "react"
import { WorkoutPopulated } from "../types"
import { IoMdFitness } from "react-icons/io"
import { trunCateText } from "../utils"

export interface IWorkoutBadgeProps {
	workout: WorkoutPopulated
}

const WorkoutBadge: React.FunctionComponent<IWorkoutBadgeProps> = ({
	workout,
}) => {
    const workoutName = trunCateText(workout.name)

	return (
		<div className="text-xs xl:text-sm flex items-center justify-center outline-dashed outline-1 m-1 outline-primary-800 dark:outline-primary-400 max-w-full overflow-hidden">
			<div className="flex items-center justify-center text-primary-800 dark:text-primary-400 ml-2 p-1 rounded-md hover:dark:bg-primary-600 hover:bg-primary-400">
				<IoMdFitness />
			</div>
			<div className="hidden xl:block text-primary-800 dark:text-primary-400 flex-1">{workoutName}</div>
		</div>
	)
}

export default WorkoutBadge
