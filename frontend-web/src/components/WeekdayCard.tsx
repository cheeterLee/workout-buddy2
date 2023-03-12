import React, { useEffect, useState } from "react"
import { setCompletedWorkouts } from "../state"
import { useAppSelector } from "../state/hooks"
import { store } from "../state/store"
import { WorkoutPopulated } from "../types"
import { formateDate } from "../utils"
import WorkoutBadge from "./WorkoutBadge"

export interface IWeekdayCardProps {
	exactDate: string
	dateInWeek: string
}

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

const WeekdayCard: React.FunctionComponent<IWeekdayCardProps> = ({
	exactDate,
	dateInWeek,
}) => {
	const user = useAppSelector((state) => state.auth.user)
	const completedWorkouts = useAppSelector(
		(state) => state.auth.completedWorkouts
	)

	const [workouts, setWorkouts] = useState<WorkoutPopulated[]>([])
    const isToday = formateDate(new Date()) === exactDate

	const fetchCompletedWorkouts = async () => {
		const response = await fetch(
			`${VITE_APP_BASE_URL}/workouts/completed?username=${user}&createdDate=${exactDate}`
		)
		// console.log(response)
		const fetchedCompletedWorkouts: WorkoutPopulated[] =
			await response.json()
		console.log(fetchedCompletedWorkouts)
		// store.dispatch(setCompletedWorkouts({
		// completedWorkouts: fetchedCompletedWorkouts
		// }))
		setWorkouts(fetchedCompletedWorkouts)
	}

	useEffect(() => {
		fetchCompletedWorkouts()
	}, [workouts])

	return (
		<div className={`${isToday ? 'outline-yellow-300 dark:outline-teal-400 outline' : 'outline-primary-800 outline-dashed dark:outline-primary-400 outline-1'} grid relative`}>
			<p className="absolute top-[45%] left-[30%] text-primary-800">
				{dateInWeek}
			</p>
			<div className="max-w-full overflow-hidden">
				{workouts.length > 0 &&
					workouts.map((w, index) => (
						<WorkoutBadge workout={w} key={index} />
					))}
			</div>
		</div>
	)
}

export default WeekdayCard
