import React, { useRef, useEffect } from "react"
import * as d3 from "d3"

export interface IChartProps {}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
	const workouts = [1, 4, 3, 10, 3, 6, 1]
	const parentRef = useRef<any>()
	const svgRef = useRef<any>()

	const createGraph = async () => {
		const w: number = parentRef.current.clientWidth
		const h: number = parentRef.current.clientHeight
		const svg = d3
			.select(svgRef.current)
			.attr("width", 0.95 * w)
			.attr("height", 0.95 * h)

		const xScale = d3
			.scaleLinear()
			.domain([0, workouts.length - 1])
			.range([0, 0.9 * w])

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(workouts) || 10]).nice()
			.range([0.9 * h, 0])
		
		const xAxis = d3
			.axisBottom(xScale)
			.ticks(workouts.length)
			.tickFormat((i) => (i.valueOf() + 1).toString())

		const yAxis = d3
			.axisLeft(yScale)
			.ticks(5)
			.tickSize(-0.9 * w)
			.tickPadding(10)
			
		svg.append("g").call(xAxis).attr("transform", `translate(0, ${0.88 * h})`)

		svg.append("g").call(yAxis).attr("transform", `translate(${0.05 * w}, 0)`);

		const generateScaledLine = d3
			.line<any>()
			.x((d, i) => xScale(i))
			.y(yScale)
			.curve(d3.curveCardinal)

			svg.selectAll(".line")
					.data([workouts])
					.join("path")
					.attr("d", (d) => generateScaledLine(d))
					.attr("fill", "none")
					.attr("stroke", "salmon")
					.style("stroke-width", "3px")

	}

	useEffect(() => {
		createGraph()
	}, [])

	// useEffect(() => {
	// 	const w: number = parentRef.current.clientWidth
	// 	const h: number = parentRef.current.clientHeight

	// 	console.log("scale (w, h)", w, h)

	// 	const svg = d3.select(svgRef.current).attr("width", w).attr("height", h)

	// 	const xScale = d3
	// 		.scaleLinear()
	// 		.domain([0, workouts.length - 1])
	// 		.range([0, w])
	// 	const yScale = d3
	// 		.scaleLinear()
	// 		// .domain([0, h])
	// 		.domain([0, d3.max(workouts) || 100])
	// 		.range([h, 0])
	// 	const generateScaledLine = d3
	// 		.line<any>()
	// 		.x((d, i) => xScale(i))
	// 		.y(yScale)
	// 		.curve(d3.curveCardinal)

	// 	const xAxis = d3
	// 		.axisBottom(xScale)
	// 		.ticks(workouts.length)
	// 		.tickFormat((i) => (i.valueOf() + 1).toString())

	// 	const yAxis = d3.axisLeft(yScale).ticks(5)

	// 	svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`)

	// 	svg.append("g").call(yAxis)

	// 	svg.selectAll(".line")
	// 		.data([workouts])
	// 		.join("path")
	// 		.attr("d", (d) => generateScaledLine(d))
	// 		.attr("fill", "none")
	// 		.attr("stroke", "salmon")
	// 		.style("stroke-width", "5px")
	// 	}, [])

	return (
		<div className="w-full flex-1 flex justify-center items-center">
			<div className="w-full h-full border-2 border-red-500 flex items-center justify-center">
				<div
					ref={parentRef}
					className="w-[85%] h-[80%] border-2 border-teal-500 bg-primary-300 dark:bg-primary-600 rounded-md drop-shadow-lg flex items-center justify-center
					px-10"
				>
					<svg
						// className="border-2 border-pink-500"
						ref={svgRef}
					></svg>
				</div>
			</div>
		</div>
	)
}

export default Chart
