import React from 'react'
import { Workout } from '../types'

export interface IWorkoutDetailProps {
    workout: Workout
}

const WorkoutDetail: React.FunctionComponent<IWorkoutDetailProps> = ({ workout }) => {
    return <div>{workout.name}</div>
}

export default WorkoutDetail