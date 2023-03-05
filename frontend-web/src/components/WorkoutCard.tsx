import React from "react"
import { IoIosFitness } from "react-icons/io"

export interface IWorkoutCardProps {
	workoutName: string
}

const WorkoutCard: React.FunctionComponent<IWorkoutCardProps> = ({
	workoutName,
}) => {
	const handleOnDrag = (e: React.DragEvent, draggedWorkout: string) => {
		e.dataTransfer.setData("draggedWorkout", draggedWorkout)
	}

	return (
		<div
			onDragStart={(e) => handleOnDrag(e, `${workoutName}`)}
			draggable
			className="cursor-grab w-full border-2 rounded-md flex items-center"
		>
			<div className="cursor-grab flex items-center justify-center text-primary-800 dark:text-yellow-400 ml-2 p-1 rounded-md hover:dark:bg-primary-600 hover:bg-primary-400">
				<IoIosFitness />
			</div>
			<div className="text-primary-800 dark:text-yellow-400 flex-1 flex justify-center">
				<p className="ml-[-30px]">{workoutName}</p>
			</div>
		</div>
	)
}

export default WorkoutCard
