import React from "react"
import { AuthOutline, LoginForm } from "../components"

export interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = (props) => {
	
	return (
		<AuthOutline children={<LoginForm />} />
	)
}

export default LoginPage
