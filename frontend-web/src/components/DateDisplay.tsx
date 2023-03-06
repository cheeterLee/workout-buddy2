import React from "react"
import { formateDate, getStartAndEndOfWeek } from "../utils"

export interface IDateDisplayProps {}

const DateDisplay: React.FunctionComponent<IDateDisplayProps> = (props) => {
    const { monday, sunday } = getStartAndEndOfWeek(new Date())
    const _monday = formateDate(monday)
    const _sunday = formateDate(sunday)

	return (
		<div className="text-center text-primary-600 dark:text-primary-400 text-sm">
            {`${_monday} - ${_sunday}`}
		</div>
	)
}

export default DateDisplay
