import React from "react"

export interface IRightBarProps {}

const RightBar: React.FunctionComponent<IRightBarProps> = (props) => {
	return (
		<div className="hidden xl:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500">
			<div className="text-primary-500 dark:text-primary-300 text-center mt-10">More coming soon...</div>
		</div>
	)
}

export default RightBar
