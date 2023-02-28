import React from 'react'

export interface IWorkoutCountProps {}

const WorkoutCount: React.FunctionComponent<IWorkoutCountProps> = props => {
    return <div className='bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md h-[150px]'>WorkoutCount</div>
}

export default WorkoutCount