import React from "react"
import { Formik, Field, Form } from "formik"
import { LoginForm } from "../components"

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
	return (
		<div className="w-screen h-screen flex flex-col items-center mt-8">
			<div
				className="bg-primary-300 dark:bg-primary-800 w-[300px] sm:w-[500px] md:w-[800px] lg:w-[900px] h-[500px]
            drop-shadow-lg rounded-md flex"
			>
				<div className="h-full hidden md:block">
					<img
						className="max-h-full rounded-l-md object-cover"
						src="logo.png"
						alt="logo"
					/>
				</div>
				<LoginForm />
			</div>
            <div className="w-full py-4 mt-4 text-center">
                <p className="font-mono text-sm text-primary-700 dark:text-primary-200">Designed and coded by @cheeterLee 2023</p>
            </div>
		</div>
	)
}

export default LoginPage
