import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import { getStartAndEndOfWeek, formateDate } from "../utils"

export interface IChartProps {}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
	const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
		getStartAndEndOfWeek(new Date())
	const _monday = formateDate(monday)
	const _sunday = formateDate(sunday)

	const workouts = [1, 3, 5, 6, 2, 4, 2]

	const parentRef = useRef<any>()
	const svgRef = useRef<any>()


	const createGraph = async () => {
		const width = 400
		const height = 200

		const margin = { top: 30, right: 30, bottom: 30, left: 30 }
		const svg = d3
			.select(svgRef.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`)

		const xScale = d3
			.scaleLinear()
			.domain([0, workouts.length - 1])
			.range([0, width])

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(workouts) || 10])
			.range([height, 0])

		const generateScaledLine = d3
			.line<any>()
			.x((d, i) => xScale(i))
			.y((d) => yScale(d))
			.curve(d3.curveCardinal)

		const xAxis = d3
			.axisBottom(xScale)
			.ticks(workouts.length)
			.tickFormat((i) => (i.valueOf() + 1).toString())

		const yAxis = d3.axisLeft(yScale).ticks(5)

		svg.append("g")
			.call(xAxis)
			.attr("transform", `translate(0, ${height})`)
			.classed(
				"font-mono text-sm text-primary-700 dark:text-primary-400",
				true
			)

		svg.append("g")
			.call(yAxis)
			.classed(
				"font-mono text-sm text-primary-700 dark:text-primary-400",
				true
			)

		svg.selectAll(".line")
			.data([workouts])
			.join("path")
			.attr("d", (d) => generateScaledLine(d))
			.attr("fill", "none")
			.attr("stroke", "#8b7877")
			.style("stroke-width", "2px")
	}

	useEffect(() => {
		createGraph()
	}, [])

	return (
		<div className="w-full flex-1 flex justify-center items-center">
			<div className="w-full h-full flex items-center justify-center">
				<div
					ref={parentRef}
					className="w-[85%] h-[90%] bg-primary-300 dark:bg-primary-600 rounded-md drop-shadow-lg flex flex-col items-center justify-center p-4"
				>
					<div className='font-mono text-primary-600 dark:text-primary-200 py-2'>{_monday} - {_sunday}</div>
					<div className="w-full h-full flex-1 flex items-center justify-center bg-primary-400 dark:bg-primary-700 rounded-md drop-shadow-md">
						<svg className="" ref={svgRef}></svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chart
