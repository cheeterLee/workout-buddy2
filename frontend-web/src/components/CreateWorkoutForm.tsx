import React from "react"
import { Formik, Field, Form } from "formik"
import { Workout } from "../types"
//TODO: ErrorMessage implementation
import { useAppSelector, useAppDispatch } from "../state/hooks"
import { setWorkouts } from "../state"

const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL as string

export interface ICreateWorkoutFormProps {}

const CreateWorkoutForm: React.FunctionComponent<ICreateWorkoutFormProps> = (
	props
) => {
    const user = useAppSelector(state => state.auth.user)
    const prevWorkouts: Workout[] = useAppSelector(state => state.auth.workouts)
    const dispatch = useAppDispatch()

	return (
		<div className="bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md h-[150px] flex flex-col items-center justify-center gap-4">
            <h3 className="font-mono font-semibold text-primary-800 dark:text-yellow-400 mb-[-10px]">Add <span className="underline decoration-primary-500 underline-offset-1 text-teal-700 dark:text-orange-400">new</span> workout 💪🏼</h3>
            <Formik
                initialValues={{
                    name: "",
                    reps: "",
                    load: "",
                }}
                onSubmit={async (values, actions) => {
                    console.log(values)

                    const formData = {
                        name: values.name,
                        reps: values.reps,
                        load: values.load,
                        username: user
                    }
                    
                    const response = await fetch(`${VITE_APP_BASE_URL}/workouts`, {
                        method: 'POST',
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(formData)
                    })

                    console.log(response)
                    const newWorkout: Workout = await response.json()
                    console.log(newWorkout)

                    dispatch(setWorkouts({
                        workouts: [...prevWorkouts, newWorkout]
                    }))

                    actions.resetForm()
                    actions.setSubmitting(false)
                }}
                validate={(values) => {
					const errors: any = {}
					if (!values.name) {
						errors.email = "Name required :)"
					} 
					if (!values.reps) {
						errors.password = "Reps required :)"
					}
					return errors
				}}
                >
                <Form className="flex flex-col gap-4 text-sm border-2 border-primary-100 p-2 rounded-lg dark:border-primary-500">
                    <div className="flex px-1 gap-1 lg:gap-3 xl:gap-4">
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="name">Name:</label>
                        <Field type='text' className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2' name='name' />
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="reps">Reps:</label>
                        <Field type='text' className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2' name='reps' />
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="load">Load:</label>
                        <Field as='select' className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2 text-sm text-primary-800 dark:text-yellow-400' name='load'>
                            <option className="text-center" value='0'>--Select--</option>
                            <option value='10'>10kg</option>
                            <option value='20'>20kg</option>
                            <option value='30'>30kg</option>
                            <option value='40'>40kg</option>
                            <option value='50'>50kg</option>
                            <option value='60'>60kg</option>
                            <option value='70'>70kg</option>
                            <option value='80'>80kg</option>
                            <option value='90'>90kg</option>
                            <option value='100'>100kg</option>
                            <option value='110'>110kg</option>
                            <option value='120'>120kg</option>
                        </Field>
                    </div>
                    <div className="flex justify-center align-center">
                        <button type='submit' className="w-[25%] bg-primary-500 hover:bg-primary-400 rounded-md drop-shadow-md text-primary-900 dark:text-yellow-400">Submit</button>
                    </div>
                </Form>
            </Formik>
		</div>
	)
}

export default CreateWorkoutForm
