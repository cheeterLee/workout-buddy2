import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import { setLogin } from "../state"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<div className="flex-1 flex flex-col justify-center">
			<div className="w-full text-center p-10">
				<h2 className="text-xl text-primary-800 dark:text-yellow-400">
					Login To{" "}
					<span className="underline decoration-primary-500 underline-offset-1 text-teal-700 dark:text-orange-400">
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
					return errors
				}}
				onSubmit={async (values, actions) => {
					console.log(values)

					const formDate = {
						// TODO: can't use email here for log in
						username: values.email,
						password: values.password
					}

					const response = await fetch(`${VITE_APP_BASE_URL}/auth/login`,{
						method: 'POST',
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(formDate)
					})

					console.log(response)

					const loggedIn = await response.json()
					console.log(loggedIn)

					if (loggedIn) {
						dispatch(
							setLogin({
								user: loggedIn.user,
								token: loggedIn.token
							})
						)
						navigate('/home')
					}

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
					<ErrorMessage className="text-red-700 dark:text-red-300 text-xs" name='email' component='div' />
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
					<ErrorMessage className="text-red-700 dark:text-red-300 text-xs" name='password' component='div' />
					<button type="submit" className="w-full bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md mt-16 p-1 text-primary-900 dark:text-yellow-400">
						Login
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default LoginForm
