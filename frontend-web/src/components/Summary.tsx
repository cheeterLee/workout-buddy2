import React, { useMemo } from "react"
import Heatmap from "./Heatmap"
import { getWorkoutsCountPastThreeMonth } from '../utils'

export interface ISummaryProps {}

const data = [
	{
		date: "2023-03-02",
		contributions: 1,
	},
	{
		date: "2023-03-05",
		contributions: 3,
	},
	{
		date: "2023-03-10",
		contributions: 10,
	},
	{
		date: "2023-04-01",
		contributions: 10,
	},
	{
		date: "2023-04-05",
		contributions: 5,
	},
]

const Summary: React.FunctionComponent<ISummaryProps> = (props) => {
	const count = useMemo(
		() => getWorkoutsCountPastThreeMonth(data),
		[data]
	)

	return (
		<div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
			<div
				className="w-[85%] h-[80%] rounded-md bg-primary-300
        	flex flex-col
        	dark:bg-primary-600 drop-shadow-lg py-1"
			>
				<div className="text-center mt-1 mb-[-5px] text-sm font-mono text-primary-700 dark:text-primary-300">
					You have worked out <span className="text-teal-700 dark:text-orange-400">{count}</span> sets last year
				</div>
				<div className="flex-1 flex items-center justify-center max-w-full max-h-full bg-primary-400 dark:bg-primary-500 m-3 rounded-lg drop-shadow-lg">
					<Heatmap data={data} />
				</div>
			</div>
		</div>
	)
}
export default Summary
