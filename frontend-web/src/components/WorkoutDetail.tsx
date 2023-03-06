import React, { useState } from "react"
import { WorkoutPopulated } from "../types"
import { RxDragHandleDots2 } from "react-icons/rx"
import { AiOutlineDelete } from "react-icons/ai"
import { useAppSelector } from "../state/hooks"
import { store } from "../state/store"
import { setWorkouts } from "../state"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface IWorkoutDetailProps {
	workout: WorkoutPopulated
	index: number
	dragItemRef: React.MutableRefObject<any>
	dragOverItemRef: React.MutableRefObject<any>
	handleSort: () => void
}

const WorkoutDetail: React.FunctionComponent<IWorkoutDetailProps> = ({
	workout,
	index,
	dragItemRef,
	dragOverItemRef,
	handleSort,
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleCheckboxChange = () => setIsChecked((prev) => !prev)

	const workouts = useAppSelector(state => state.auth.workouts)

	const handleDelete = async () => {
		console.log(workout._id)
		const response = await fetch(`${VITE_APP_BASE_URL}/workouts/${workout._id}`, {
			method: "DELETE"
		})
		console.log(response)
		const deletedWorkout = await response.json()
		console.log(deletedWorkout)
		if (deletedWorkout) {
			const _workouts = workouts.filter(w => w._id !== deletedWorkout._id)
			store.dispatch(setWorkouts({
				workouts: _workouts
			}))
		}
	}

	return (
		<div
			draggable
			onDragStart={(e) => (dragItemRef.current = index)}
			onDragEnter={(e) => (dragOverItemRef.current = index)}
			onDragEnd={handleSort}
			onDragOver={(e) => e.preventDefault()}
			className="w-full border-2 rounded-md flex items-center justify-between py-1"
		>
			<div className="cursor-move flex items-center justify-center text-primary-800 dark:text-yellow-400 ml-2 p-1 rounded-md hover:dark:bg-primary-600 hover:bg-primary-400">
				<RxDragHandleDots2 />
			</div>
			<div className="flex gap-4 text-primary-800 dark:text-yellow-400">
				<p className="font-mono font-semibold">{workout.name}</p>
				<p>{`${workout.reps} reps`}</p>
				<p>{`${workout.load} kg`}</p>
			</div>
			<div className="flex items-center gap-1 ">
				<label className="inline-flex items-center cursor-pointer">
					<div className="relative">
						<input
							type="checkbox"
							className="sr-only"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<div className="w-4 h-4 border-2 border-primary-500 dark:border-primary-400 bg-primary-300 dark:bg-primary-500 rounded-sm"></div>
						<svg
							className={`w-3 h-3 text-primary-800 dark:text-yellow-400 pointer-events-none fill-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
								isChecked
									? "opacity-100 checked:translate-x-0"
									: "opacity-0"
							}`}
							viewBox="0 0 20 20"
						>
							<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
						</svg>
					</div>
				</label>
				<div 
				onClick={() => handleDelete()}
				className="flex text-lg mx-2 p-1 cursor-pointer justify-center items-center text-primary-800 dark:text-yellow-400 hover:dark:bg-primary-600 hover:bg-primary-400 rounded-md">
					<AiOutlineDelete />
				</div>
			</div>
		</div>
	)
}

export default WorkoutDetail
