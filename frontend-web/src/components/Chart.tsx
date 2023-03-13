import React, { useRef, useEffect } from "react"
import * as d3 from 'd3'

export interface IChartProps {}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
    const workouts = [1, 4, 3, 20, 3, 6, 1]
    const parentRef = useRef<any>()
    const svgRef = useRef<any>()

    useEffect(() => {
        const w: number = parentRef.current.clientWidth
        const h: number = parentRef.current.clientHeight
        
        console.log('scale (w, h)', w, h)

        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)


        const xScale = d3.scaleLinear()
            .domain([0, workouts.length - 1])
            .range([0, w])
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0])
        const generateScaledLine = d3.line<any>()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        const xAxis = d3.axisBottom(xScale)
            .ticks(workouts.length)
        
        svg.selectAll('.line')
            .data([workouts])
            .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('fill', 'none')
                .attr('stroke', 'black')
    }, [])

	return (
		<div className="v-full flex-1 flex justify-center items-center">
			<div ref={parentRef} className="w-[85%] h-[80%] bg-primary-300 dark:bg-primary-600 rounded-md drop-shadow-lg">
				<svg ref={svgRef}></svg>
			</div>
		</div>
	)
}

export default Chart
