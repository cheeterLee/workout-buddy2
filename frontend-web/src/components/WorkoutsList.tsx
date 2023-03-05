import React, { useEffect, useState, useRef } from "react"
import { setWorkouts } from "../state"
import { store } from "../state/store"
import { useAppSelector, useAppDispatch } from "../state/hooks"
import { Workout } from "../types"
import WorkoutDetail from "./WorkoutDetail"
import { RxDragHandleDots2 } from "react-icons/rx"
import { AiOutlineDelete } from "react-icons/ai"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface IWorkoutListProps {}

const WorkoutList: React.FunctionComponent<IWorkoutListProps> = (props) => {
	const workouts = useAppSelector((state) => state.auth.workouts)
	const user = useAppSelector((state) => state.auth.user)

	const [isChecked, setIsChecked] = useState<boolean>(false)
	const dragItem = React.useRef<any>(null)
	const dragOverItem = React.useRef<any>(null)

	const handleSort = () => {
		let _workouts =[...workouts]
		const draggedItemContent = _workouts.splice(dragItem.current, 1)[0]
		_workouts.splice(dragOverItem.current, 0, draggedItemContent)
		dragItem.current = null
		dragOverItem.current = null
		store.dispatch(setWorkouts({
			workouts: _workouts
		}))
	}

    const handleCheckboxChange = () => setIsChecked((prev) => !prev)

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		console.log("drag over")
	}

	const handleOnDrop = async (e: React.DragEvent) => {
		const draggedWorkout = JSON.parse(
			e.dataTransfer.getData("draggedWorkout")
		)
		console.log("draggedWorkout", draggedWorkout)
		const workoutData = {
			name: draggedWorkout.name,
			reps: draggedWorkout.reps,
			load: draggedWorkout.load,
			username: user
		}

		const response = await fetch(`${VITE_APP_BASE_URL}/workouts`, {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(workoutData)
		})

		const newWorkout: Workout = await response.json()
		if (newWorkout) {
			store.dispatch(
				setWorkouts({
					workouts: [...workouts, draggedWorkout],
				})
			)
		}
	}

	const fetchWorkouts = async () => {
		const response = await fetch(
			`${VITE_APP_BASE_URL}/workouts/?username=${user}`
		)
		console.log(response)
		const fetchedWorkouts: Workout[] = await response.json()
		console.log(fetchedWorkouts)
		store.dispatch(
			setWorkouts({
				workouts: fetchedWorkouts,
			})
		)
	}

	useEffect(() => {
		fetchWorkouts()
	}, [])

	return (
		<div
			onDragOver={handleDragOver}
			onDrop={handleOnDrop}
			className="bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md flex-1 flex flex-col gap-0 p-1"
		>
			{workouts.map((workout: Workout, index: number) => (
				<div
					draggable
					onDragStart={(e) => dragItem.current = index}
					onDragEnter={(e) => dragOverItem.current = index}
					onDragEnd={handleSort}
					onDragOver={(e) => handleDragOver(e)}
					key={index}
					className="w-full border-2 rounded-md flex items-center justify-between py-1"
				>
					<div className="cursor-move flex items-center justify-center text-primary-800 dark:text-yellow-400 ml-2 p-1 rounded-md hover:dark:bg-primary-600 hover:bg-primary-400">
						<RxDragHandleDots2 />
					</div>
					<div className="flex gap-4 text-primary-800 dark:text-yellow-400">
						<p className="font-mono font-semibold">
							{workout.name}
						</p>
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
						<div className="flex text-lg mx-2 p-1 cursor-pointer justify-center items-center text-primary-800 dark:text-yellow-400 hover:dark:bg-primary-600 hover:bg-primary-400 rounded-md">
							<AiOutlineDelete />
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default WorkoutList
