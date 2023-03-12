import React from "react"

export interface IContactPageProps {}

const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
	return (
		<div className="w-screen h-screen flex flex-col items-center px-10">
			<div className="mt-3 w-full h-[350px] object-cover bg-center flex justify-center items-center bg-[url('header.png')] rounded-md drop-shadow-md"></div>

		</div>
	)
}

export default ContactPage
