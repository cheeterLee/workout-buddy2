import React, { useEffect } from 'react'
import { setWorkouts } from '../state'
import { store } from '../state/store'
import { useAppSelector } from '../state/hooks'
import { Workout } from '../types'

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface IWorkoutListProps {}

const WorkoutList: React.FunctionComponent<IWorkoutListProps> = props => {
    const workouts = useAppSelector((state) => state.auth.workouts)

    const fetchWorkouts = async () => {
        const response = await fetch(`${VITE_APP_BASE_URL}/workouts`)
        console.log(response)
        const fetchedWorkouts: Workout[] = await response.json()
        console.log(fetchedWorkouts)
        store.dispatch(setWorkouts({
            workouts: fetchedWorkouts
        }))
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])

    return <div className='bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md flex-1'>
        {workouts.map((workout: Workout, index: number) => (
            <div key={index}>{workout.name}</div>
        ))}
    </div>
}

export default WorkoutList