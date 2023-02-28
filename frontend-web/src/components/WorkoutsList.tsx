import React from 'react'

export interface IWorkoutListProps {}

const WorkoutList: React.FunctionComponent<IWorkoutListProps> = props => {
    return <div className='bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md flex-1'>WorkoutList</div>
}

export default WorkoutList