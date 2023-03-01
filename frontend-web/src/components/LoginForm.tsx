import React from "react"
import { Formik, Field, Form } from "formik"

export interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
	return (
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
					<label
						className="text-primary-800 dark:text-yellow-400"
						htmlFor="email"
					>
						Email:
					</label>
					<Field
						className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300"
						name="email"
					/>
					<label
						className="text-primary-800 dark:text-yellow-400"
						htmlFor="password"
					>
						Password:
					</label>
					<Field
						className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300"
						name="password"
					/>
					<button className="w-full bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md mt-16 p-1 text-primary-900 dark:text-yellow-400">
						Login
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default LoginForm
