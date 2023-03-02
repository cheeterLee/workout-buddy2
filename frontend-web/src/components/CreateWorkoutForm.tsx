import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"

export interface ICreateWorkoutFormProps {}

const CreateWorkoutForm: React.FunctionComponent<ICreateWorkoutFormProps> = (
	props
) => {
	return (
		<div className="bg-primary-300 dark:bg-primary-700 rounded-md drop-shadow-md h-[150px] flex flex-col items-center justify-center gap-4">
            <h3 className="text-primary-800 dark:text-yellow-400 mb-[-10px]">Add new workout 💪🏼</h3>
            <Formik
                initialValues={{
                    name: "",
                    reps: "",
                    load: "",
                }}
                onSubmit={() => {}}
                >
                <Form className="flex flex-col gap-4 text-sm border-2 p-2 rounded-lg dark:border-primary-500">
                    <div className="flex px-1 gap-1 lg:gap-3 xl:gap-4">
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="name">Name:</label>
                        <Field className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2' name='name' />
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="reps">Reps:</label>
                        <Field className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2' name='reps' />
                        <label className="text-primary-800 dark:text-yellow-400" htmlFor="load">Load:</label>
                        <Field as='select' className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[200px] bg-primary-100 dark:bg-primary-500 rounded-md focus:outline-none focus:border-2 focus:border-primary-700 dark:focus:border-yellow-300 px-2 text-sm' name='load'>
                            <option value='10kg'>10kg</option>
                            <option value='20kg'>20kg</option>
                            <option value='30kg'>30kg</option>
                            <option value='40kg'>40kg</option>
                            <option value='50kg'>50kg</option>
                            <option value='60kg'>60kg</option>
                            <option value='70kg'>70kg</option>
                            <option value='80kg'>80kg</option>
                            <option value='90kg'>90kg</option>
                            <option value='100kg'>100kg</option>
                            <option value='110kg'>110kg</option>
                            <option value='120kg'>120kg</option>
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
