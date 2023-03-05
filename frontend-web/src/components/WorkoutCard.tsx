import React from "react"
import { IoIosFitness } from "react-icons/io"
import { Workout } from "../types"

export interface IWorkoutCardProps {
	workout: Workout
}

const WorkoutCard: React.FunctionComponent<IWorkoutCardProps> = ({
	workout
}) => {
	const handleOnDrag = (e: React.DragEvent, draggedWorkout: Workout) => {
		e.dataTransfer.setData("draggedWorkout", JSON.stringify(draggedWorkout))
	}

	return (
		<div
			onDragStart={(e) => handleOnDrag(e, workout)}
			draggable
			className="cursor-grab w-full border-2 rounded-md flex items-center"
		>
			<div className="cursor-grab flex items-center justify-center text-primary-800 dark:text-yellow-400 ml-2 p-1 rounded-md hover:dark:bg-primary-600 hover:bg-primary-400">
				<IoIosFitness />
			</div>
			<div className="text-primary-800 dark:text-yellow-400 flex-1 flex justify-center">
				<p className="ml-[-30px]">{workout.name}</p>
			</div>
		</div>
	)
}

export default WorkoutCard
