import React, { useCallback, useEffect } from "react"
import { setWorkouts } from "../state"
import { store } from "../state/store"
import { useAppSelector } from "../state/hooks"
import { WorkoutPopulated } from "../types"
import WorkoutDetail from "./WorkoutDetail"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface IWorkoutListProps {}

const WorkoutList: React.FunctionComponent<IWorkoutListProps> = (props) => {
	const workouts = useAppSelector((state) => state.auth.workouts)
	const user = useAppSelector((state) => state.auth.user)

	const dragItemRef = React.useRef<any>(null)
	const dragOverItemRef = React.useRef<any>(null)

	const handleSort = useCallback(() => {
		let _workouts = [...workouts]
		const draggedItemContent = _workouts.splice(dragItemRef.current, 1)[0]
		_workouts.splice(dragOverItemRef.current, 0, draggedItemContent)
		dragItemRef.current = null
		dragOverItemRef.current = null
		store.dispatch(
			setWorkouts({
				workouts: _workouts,
			})
		)
	}, [workouts])

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
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
			username: user,
		}

		const response = await fetch(`${VITE_APP_BASE_URL}/workouts`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(workoutData),
		})

		const newWorkout: WorkoutPopulated = await response.json()
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
		// console.log(response)
		const fetchedWorkouts: WorkoutPopulated[] = await response.json()
		// console.log(fetchedWorkouts)
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
			{workouts.length &&
				workouts.map((workout: WorkoutPopulated, index: number) => (
					<WorkoutDetail
						key={index}
						workout={workout}
						index={index}
						dragItemRef={dragItemRef}
						dragOverItemRef={dragOverItemRef}
						handleSort={handleSort}
					/>
				))}
		</div>
	)
}

export default WorkoutList
