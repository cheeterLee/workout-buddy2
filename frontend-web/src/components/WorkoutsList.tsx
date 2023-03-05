import React, { useEffect } from "react"
import { setWorkouts } from "../state"
import { store } from "../state/store"
import { useAppSelector, useAppDispatch } from "../state/hooks"
import { Workout } from "../types"
import WorkoutDetail from "./WorkoutDetail"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface IWorkoutListProps {}

const WorkoutList: React.FunctionComponent<IWorkoutListProps> = (props) => {
	const workouts = useAppSelector((state) => state.auth.workouts)
	const user = useAppSelector((state) => state.auth.user)
	const dispatch = useAppDispatch()

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		console.log('drag over')
	}

	const handleOnDrop = (e: React.DragEvent) => {
 		const draggedWorkout = JSON.parse(e.dataTransfer.getData('draggedWorkout'))
		console.log('draggedWorkout', draggedWorkout)
		store.dispatch(
			setWorkouts({
				workouts: [...workouts, draggedWorkout]
			})
		)
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
		className="bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md flex-1 flex flex-col gap-0 p-1">
			{workouts.map((workout: Workout, index: number) => (
				<WorkoutDetail key={index} workout={workout} />
			))}
		</div>
	)
}

export default WorkoutList
