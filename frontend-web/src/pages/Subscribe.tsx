import { Formik, Field, Form } from "formik"
import React from "react"
import { useAppSelector } from "../state/hooks"

export interface ISubscribePageProps {}

const SubscribePage: React.FunctionComponent<ISubscribePageProps> = (props) => {
    const user = useAppSelector(state => state.auth.user)

	return (
		<div className="w-screen h-screen bg-primary-300 dark:bg-primary-700 flex flex-col items-center px-10 gap-6">
			<div className="mt-[50px] w-full h-[350px] object-cover bg-center flex justify-center items-center bg-[url('header.png')] rounded-md drop-shadow-md"></div>
			<div className="flex flex-col items-center w-full">
				<h3 className="font-mono text-lg text-primary-800 dark:text-yellow-400 text-center">Subscribe to our workout recommendations :)</h3>
				<Formik
					initialValues={{
						email: user || '',
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
						return errors
					}}
					onSubmit={() => {}}
				>
					<Form className="flex-1 flex flex-col gap-3 mt-5">
						<div className="flex gap-4">
							<label
								className="text-primary-800 dark:text-yellow-400"
								htmlFor="email"
							>
								Email:
							</label>
							<Field
								className="bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2
                                text-primary-700 dark:text-primary-200"
								name="email"
								type="email"
								autoComplete="current-password"
                                autoFocus="true"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md p-1 text-primary-900 mt-3 dark:text-yellow-400"
						>
							Subscribe
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default SubscribePage
