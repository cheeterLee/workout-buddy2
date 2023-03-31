import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

export interface ISummaryProps {}

const data = [
	{ date: "2023.3.28", value: 2 },
	{ date: "2023.3.29", value: 5 },
	{ date: "2023.3.30", value: 4 },
	{ date: "2023.3.31", value: 1 },
]

const Summary: React.FunctionComponent<ISummaryProps> = (props) => {
	const svgRef = useRef<any>()


	const createGraph = async () => {
		const width = 600
		const height = 100

		const years = d3.group(data, (d) => d.date.split(".")[0])

		const cellSize = 15
		const yearHeight = cellSize * 7 + 25
		const formatDay = (d: any) =>
			["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"][d.getUTCDay()]
		const countDay = (d: any) => d.getUTCDay()
		const timeWeek = d3.utcSunday

		const margin = { top: 30, right: 30, bottom: 30, left: 30 }
		const svg = d3
			.select(svgRef.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`)

		// const getColor = d3.scaleLinear<any>().domain(domain).range(colors)

		// const p = 0.25 //Valid range for p is 0.0-1.0
		// const x = p * 2 - 1
		// const color = d3.color(getColor(x))
		// console.log(color?.formatHex())
	}

	useEffect(() => {
		createGraph()
	}, [])

	return (
		<div className="w-full h-[300px] flex items-center justify-center">
			<div
				className="w-[85%] h-[80%] rounded-md bg-primary-300
        flex flex-col
        dark:bg-primary-600 drop-shadow-lg border-2 border-pink-400"
			>
				<div>You have worked out 100 times last year</div>
				<div className="flex-1 border-2 border-teal-400 flex items-center justify-center">
					<svg className="border-2 border-sky-500" ref={svgRef}></svg>
				</div>
			</div>
		</div>
	)
}

export default Summary
