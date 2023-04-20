import React, { useEffect, useRef, useState } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import * as d3 from "d3"

export interface IHeatmapProps {
	data: any
}

const Heatmap: React.FunctionComponent<IHeatmapProps> = ({ data }) => {
	const [fullYearData, setFullYearData] = useState<any>([])
	const [originalData, setOriginalData] = useState<any>([])

	dayjs.extend(utc)

	let chartRef = useRef(null)
	const now = dayjs()
	const today = now.format("YYYY/MM/DD")

	useEffect(() => {
		setOriginalData(data)
	}, [data])

	useEffect(() => {
		const firstDate = now.subtract(3, "month").format("YYYY-MM-DD")
		// const quarterBackFromNow = now.subtract(3, "month");
		const lastDate = now.format("YYYY-MM-DD")

		// fill the missing dates
		if (data && originalData.length > 0) {
			console.log([firstDate, lastDate])
			const dates = [
				...Array(
					Date.parse(lastDate) / 86400000 -
						Date.parse(firstDate) / 86400000 +
						1
				).keys(),
			].map(
				(k) =>
					new Date(86400000 * k + Date.parse(firstDate))
						.toISOString()
						.slice(0, 10)
				// .replace(/-0(\d)$/, '-$1')
			)

			// console.log(dates);

			let response = []
			for (let i = 0, j = 0; i < dates.length; i++) {
				response[i] = {
					date: dates[i],
					contributions:
						dates[i] === originalData[j]?.date
							? originalData[j++].contributions
							: 0,
				}
			}

			setFullYearData(response)
		}
	}, [originalData])

	useEffect(() => {
		if (chartRef && fullYearData) {
			const now = dayjs()
			const today = now.format("YYYY/MM/DD")
			const firstDate = now.subtract(3, "month").format("YYYY/MM/DD")

			let chart = chartRef?.current

			// remove existing svg before showing chart:
			//Prevent showing multiple charts

			d3.select(".heatmap").remove()

			const years = d3.groups(fullYearData, (d: any) =>
				new Date(d.date).getUTCFullYear()
			)
			let width = 730
			const height = 130
			// const years = data;

			var margin = { top: 80, right: 25, bottom: 30, left: 40 }
			// width = 650 - margin.left - margin.right,
			// height = 400 - margin.top - margin.bottom;

			// append the svg object to the body of the page
			var svg = d3
				.select(chart)
				.append("svg")
				.attr("class", "heatmap")
				.style("width", width)

			// create a tooltip
			var tooltip = d3
				.select(chart)
				.append("div")
				.style("opacity", 0)
				.attr("class", "tooltip")
				.style("background-color", "#1f1f1f")
				.style("padding", "12px 20px")
				.style("color", "#ffffff")
				.style("width", "250px")
				.style("z-index", "100")
				.style("line-height", "19px")
				.style("position", "absolute")

			// Three function that change the tooltip when user hover / move / leave a cell

			const mouseover = function (this: any, event: any, d: any) {
				tooltip.style("opacity", 1)
				d3.select(this).style("stroke", "black").style("opacity", 1)
			}

			const mousemove = function (this: any, event: any, d: any) {
				const formatDate = d3.utcFormat("%d/%m/%Y")
				const date = formatDate(new Date(d.date))

				tooltip
					.style(
						"left",
						`${
							event.pageX > 1600 ? event.pageX - 200 : event.pageX
						}px`
					)
					.style("top", `${event.pageY + 20}px`)
					.html("Date: " + date)
					.append("div")

					.html(`Value: ${d.contributions}`)
				// .style('position', 'absolute');
				// .html('The exact value of<br>this cell is: ' + d.value)
			}
			var mouseleave = function (this: any, event: any, d: any) {
				tooltip.style("opacity", 0)
				d3.select(this).style("stroke", "none").style("opacity", 0.8)
			}

			const timeWeek = d3.utcSunday
			const countDay = (i: any) => i

			const formatDay = (i: any) => "MWFS"[i]
			const formatMonth = d3.utcFormat("%b")
			// const max = d3.quantile(data, 0.9975, d => Math.abs(d.value));
			// const color = d3.scaleSequential(d3.interpolatePiYG).domain(['white', 'red']);

			const cellWidth =
				width /
				(timeWeek.count(
					new Date(Date.parse(firstDate)),
					new Date(Date.parse(dayjs().format("YYYY-MM-DD")))
				) +
					2)
			const cellHeight = height / 9
			const color = d3
				.scaleLinear<any>()
				.domain([
					0,
					d3.max(fullYearData, (d: any) =>
						Math.abs(d.contributions)
					) as number,
				])
				.range(["#EFCFCE", "#F0524D"])

			const year = svg
				.selectAll("g")
				.data(years)
				.join("g")
				// .attr('transform', (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`);
				.attr("transform", (d, i) => {
					return `translate(40.5,${"30"})`
				})

			year.append("g")
				.attr("text-anchor", "end")
				.selectAll("text")
				.data(d3.range(7))

				.join("text")
				.attr("x", -5)
				.attr("y", (i) => (countDay(i) + 0.5) * cellHeight)
				.attr("dy", (d, i) => `${1.15 * i}em`)
				.attr("class", "week")
				.style("font-size", "12px")
				// .text('')
				.text(formatDay)

			console.log(
				"utcsun",
				d3.utcSunday(),
				d3.utcSunday.count(new Date(firstDate), new Date(today))
			)

			year.append("g")
				.style("position", "relative")
				.selectAll("rect")
				.data(([, values]) => {
					// filter to show only selected months data
					// return values.filter(d => showMonths.includes(new Date(d.date).getUTCMonth()));
					// return new Date(values.date).getUTCMonth();
					console.log(values.reverse())
					return values.reverse()
				})

				.join("rect")
				.attr("width", cellWidth - 3)
				.attr("height", cellHeight - 3)

				.attr(
					"x",
					(d: any) =>
						timeWeek.count(
							new Date(Date.parse(firstDate)),
							new Date(d.date)
						) *
							cellWidth +
						0.5
				)
				.attr(
					"y",
					(d: any) =>
						countDay(new Date(d.date).getUTCDay()) * cellHeight +
						0.5
				)
				.attr("fill", (d: any) => {
					if (d.contributions) {
						return color(d.contributions)
					} else {
						return "#E7E7E7"
					}
				})
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseleave", mouseleave)
				.append("title")

			// console.log(today);

			// Initialising start and end date
			let start = firstDate
			let end = today

			// Calling the utcMonths() function
			// without step value
			// var a = d3.utcMonths(start, end);

			// Getting the months values
			// console.log(a);

			const month = year
				.append("g")
				.selectAll("g")
				// .data(([, values]) => {
				//   console.log(new Date(firstDate).getUTCMonth(), new Date(today).getUTCMonth());
				//   // console.log(new Date(data[0].date));

				//   return d3.utcMonths(start, end);
				//   // return d3.utcMonths('Feb', 'Dec');
				// })
				.data(([, values]: [any, any]) => {
					return d3.utcMonths(
						d3.utcMonth(new Date(values[0].date)),
						new Date(values[values.length - 1].date)
						// d3.utcMonth(new Date(values[0].date)),
						// isXL ? endMonthText : new Date(values[values.length - 1].date)
					)
				})
				.join("g")

			month
				.append("text")
				.attr("x", (d: any) => {
					return (
						timeWeek.count(
							new Date(Date.parse(firstDate)),
							timeWeek.ceil(d)
						) *
							cellWidth +
						2
					)
				})
				.attr("y", -5)
				.attr("class", "month")
				.style("font-size", "12px")
				.text(formatMonth)
		}
	}, [fullYearData])

	return (
		<>
			<div className="border-2 border-pink-600" id="chart" ref={chartRef}></div>
		</>
	)
}

export default Heatmap