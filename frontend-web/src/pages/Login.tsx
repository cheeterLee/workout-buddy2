import React from "react"
import { Formik, Field, Form } from "formik"

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
	return (
		<div className="w-screen h-screen flex flex-col items-center mt-8">
			<div
				className="bg-primary-300 dark:bg-primary-800 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-[500px]
            drop-shadow-lg rounded-md flex"
			>
				<div className="max-h-full hidden md:block">
					<img
						className="max-h-full rounded-l-md"
						src="logo.png"
						alt="logo"
					/>
				</div>
				<div className="flex-1 flex flex-col justify-center">
					<div className="w-full text-center p-10">
						<h2 className="text-xl text-primary-800 dark:text-yellow-400">
							Login To{" "}
							<span className="underline decoration-primary-500 underline-offset-1">
								Workout
							</span>
							!
						</h2>
					</div>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						onSubmit={() => {}}
					>
						<Form className="flex-1 flex flex-col px-4 gap-2">
							<label className="text-primary-800 dark:text-yellow-400" htmlFor="email">Email:</label>
							<Field className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300" name="email" />
							<label className="text-primary-800 dark:text-yellow-400" htmlFor="password">Password:</label>
							<Field className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300" name="password" />
                            <button className="w-full bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md mt-16 p-1 text-primary-900 dark:text-yellow-400">Login</button>
						</Form>
					</Formik>
				</div>
			</div>
            <div className="w-full py-4 text-center">
                <p className="font-mono text-sm text-primary-700 dark:text-primary-200">Designed and coded by @cheeterLee 2023</p>
            </div>
		</div>
	)
}

export default LoginPage
