import React from 'react'
import { AuthOutline, SignupForm } from '../components'

export interface ISignupPageProps {}

const SignupPage: React.FunctionComponent<ISignupPageProps> = props => {
    return <AuthOutline children={<SignupForm />} />
}

export default SignupPage