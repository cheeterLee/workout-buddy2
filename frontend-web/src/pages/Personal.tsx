import React from "react"

export interface IPersonalPageProps {}

const PersonalPage: React.FunctionComponent<IPersonalPageProps> = (props) => {
	return (
		<div className="w-screen h-screen grid grid-cols-1 lg:grid-cols-lg xl:grid-cols-xl">
			<div className="hidden lg:block border-2 border-red-500">left</div>
			<div className="border-2 border-red-500">mid</div>
			<div className="hidden xl:block border-2 border-red-500">right</div>
		</div>
	)
}

export default PersonalPage
