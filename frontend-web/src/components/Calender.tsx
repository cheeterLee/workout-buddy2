import React from "react"
import { useAppSelector } from "../state/hooks"
import { getStartAndEndOfWeek, formateDate } from "../utils"
import DateDisplay from "./DateDisplay"
import WeekdayCard from "./WeekdayCard"

export interface ICalenderProps {}

const Calender: React.FunctionComponent<ICalenderProps> = (props) => {
	const { monday,tuesday, wednesday, thursday, friday, saturday, sunday } = getStartAndEndOfWeek(new Date())
    const _monday = formateDate(monday)
	const _tuesday = formateDate(tuesday)
	const _wednesday = formateDate(wednesday)
	const _thursday = formateDate(thursday)
	const _friday = formateDate(friday)
	const _saturday = formateDate(saturday)
    const _sunday = formateDate(sunday)

	const user = useAppSelector(state => state.auth.user)

	const dates = [
		_monday,
		_tuesday,
		_wednesday,
		_thursday,
		_friday,
		_saturday,
		_sunday
	]

	const weekDay = [
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat',
		'Sun'
	]

	return (
		<div className="bg-primary-300 dark:bg-primary-700 h-[300px] drop-shadow-md rounded-md p-2 flex flex-col justify-center">
			<h3 className="text-primary-800 dark:text-yellow-400 text-center font-mono font-semibold py-1">
				<span className=" text-teal-700 dark:text-orange-400">{user}'s</span> weekly activities
			</h3>
			<DateDisplay monday={_monday} sunday={_sunday} />
			<div className="grid grid-cols-7 h-[80%] p-2 bg-primary-400 dark:bg-primary-600 rounded-md">
				{dates.map((date, index) => (
					<WeekdayCard key={index} exactDate={date} dateInWeek={weekDay[index]} />
				))}
			</div>
		</div>
	)
}

export default Calender
