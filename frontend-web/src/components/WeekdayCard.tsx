import React from "react"

export interface IWeekdayCardProps {
    exactDate: string
}

const WeekdayCard: React.FunctionComponent<IWeekdayCardProps> = ({ exactDate }) => {
	return (
		<div className="outline-dashed outline-1 outline-primary-800 dark:outline-primary-400 grid">
			<p className="m-auto text-primary-800">
                {exactDate}
            </p>
		</div>
	)
}

export default WeekdayCard
