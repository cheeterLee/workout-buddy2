import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface ISignupFormProps {}

const SignupForm: React.FunctionComponent<ISignupFormProps> = (props) => {
	return (
		<div className="flex-1 flex flex-col justify-center">
			<div className="w-full text-center p-10">
				<h2 className="text-xl text-primary-800 dark:text-yellow-400">
					Sign up{" "}
					<span className="underline decoration-primary-500 underline-offset-1 text-teal-700 dark:text-orange-400">
						Today
					</span>
					!
				</h2>
			</div>
			<Formik
				initialValues={{
					email: "",
					password: "",
					cPassword: "",
				}}
				validate={(values) => {
					const errors: any = {}
					if (!values.email) {
						errors.email = "Email required :)"
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
							values.email
						)
					) {
						errors.email = "Invalid email address :)"
					}
					if (!values.password) {
						errors.password = "Password requierd :)"
					}
					if (values.password !== values.cPassword) {
						errors.cPassword =
							"Password must be the same as above :)"
					}
					return errors
				}}
				onSubmit={async (values, actions) => {
					const formData = {
						email: values.email,
						password: values.password,
					}

					console.log(formData)

					const response = await fetch(
						`${VITE_APP_BASE_URL}/register`,
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(formData),
						}
					)

					console.log(response)

					const signedup = await response.json()
					console.log(signedup)
					
					
					actions.resetForm()
					actions.setSubmitting(false)
				}}
			>
				<Form className="flex-1 flex flex-col px-4 gap-2">
					<label
						className="text-primary-800 dark:text-yellow-400"
						htmlFor="email"
					>
						Email:
					</label>
					<Field
						className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2"
						name="email"
						type="email"
					/>
					<ErrorMessage
						className="text-red-700 dark:text-red-300 text-xs"
						name="email"
						component="div"
					/>
					<label
						className="text-primary-800 dark:text-yellow-400"
						htmlFor="password"
					>
						Password:
					</label>
					<Field
						className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2"
						name="password"
						type="password"
					/>
					<ErrorMessage
						className="text-red-700 dark:text-red-300 text-xs"
						name="password"
						component="div"
					/>
					<label
						className="text-primary-800 dark:text-yellow-400"
						htmlFor="cPassword"
					>
						Confirm Password:
					</label>
					<Field
						className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2"
						name="cPassword"
						type="Password"
					/>
					<ErrorMessage
						className="text-red-700 dark:text-red-300 text-xs"
						name="cPassword"
						component="div"
					/>
					<button
						type="submit"
						className="w-full bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md mt-16 p-1 text-primary-900 dark:text-yellow-400"
					>
						Signup
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default SignupForm
