import React from "react"
import { formateDate, getStartAndEndOfWeek } from "../utils"

export interface IDateDisplayProps {
	monday: string
	sunday: string
}

const DateDisplay: React.FunctionComponent<IDateDisplayProps> = ({
	monday,
	sunday,
}) => {
	return (
		<div className="text-center text-primary-600 dark:text-primary-400 text-sm">
			{`${monday} - ${sunday}`}
		</div>
	)
}

export default DateDisplay
