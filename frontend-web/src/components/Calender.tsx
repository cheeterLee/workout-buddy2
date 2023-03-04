import React from "react"

export interface ICalenderProps {}

const Calender: React.FunctionComponent<ICalenderProps> = (props) => {
	return (
		<div className="bg-primary-300 dark:bg-primary-700 h-[300px] drop-shadow-md rounded-md p-2 flex flex-col justify-center">
			<h3 className="text-primary-800 dark:text-yellow-400 text-center font-mono font-semibold py-1">
				View Weely Activities
			</h3>
			<div className="grid grid-cols-7 h-[80%] p-2 bg-primary-400 dark:bg-primary-600 rounded-md">
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Mon</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Tue</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Wed</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Thu</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Fri</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Sat</p>
				</div>
				<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
					<p className="m-auto text-primary-800">Sun</p>
				</div>
			</div>
		</div>
	)
}

export default Calender
