import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import Heatmap from "./Heatmap"

export interface ISummaryProps {}

const data = [
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
	return (
		<div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
			<div
				className="w-[85%] h-[80%] rounded-md bg-primary-300
        	flex flex-col
        	dark:bg-primary-600 drop-shadow-lg"
			>
				<div>You have worked out 100 times last year</div>
				<div className="flex-1 flex items-center justify-center max-w-full max-h-full">
					<Heatmap data={data} />
				</div>
			</div>
		</div>
	)
}
export default Summary
