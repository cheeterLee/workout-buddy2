import React from 'react'

export interface IWorkoutCountProps {}

const WorkoutCount: React.FunctionComponent<IWorkoutCountProps> = props => {
    return <div className='bg-neutral-600 rounded-md drop-shadow-md h-[150px]'>WorkoutCount</div>
}

export default WorkoutCount