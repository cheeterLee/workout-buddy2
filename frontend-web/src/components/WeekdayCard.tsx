import React from "react"

export interface IWeekdayCardProps {
    exactDate: string
    dateInWeek: string
}

const WeekdayCard: React.FunctionComponent<IWeekdayCardProps> = ({ exactDate, dateInWeek }) => {
	return (
		<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
			<p className="m-auto text-primary-800">
                {dateInWeek}
            </p>
		</div>
	)
}

export default WeekdayCard
