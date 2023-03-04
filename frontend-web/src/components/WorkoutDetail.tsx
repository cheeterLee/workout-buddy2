import React, { useState } from "react"
import { Workout } from "../types"
import { RxDragHandleDots2 } from "react-icons/rx"
import { AiOutlineDelete } from "react-icons/ai"

export interface IWorkoutDetailProps {
	workout: Workout
}

const WorkoutDetail: React.FunctionComponent<IWorkoutDetailProps> = ({
	workout,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    
    const handleCheckboxChange = () => setIsChecked((prev) => !prev)

	return (
		<div className="w-full border-2 rounded-md flex items-center justify-between">
			<div className="flex items-center justify-center text-primary-800 dark:text-yellow-400 px-2">
				<RxDragHandleDots2 />
			</div>
			<div className="flex gap-4 text-primary-800 dark:text-yellow-400">
				<p>{workout.name}</p>
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
                <div className="flex justify-center items-center text-primary-800 dark:text-yellow-400 px-2">
				    <AiOutlineDelete />
                </div>
			</div>
		</div>
	)
}

export default WorkoutDetail
