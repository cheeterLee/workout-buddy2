import React, { FunctionComponent } from 'react'

export interface IAuthOutlineProps {
    children?: any
}

const AuthOutline: React.FunctionComponent<IAuthOutlineProps> = ({ children }) => {
    return (
        <div className="w-screen h-screen flex flex-col items-center mt-9">
			<div
				className="bg-primary-300 dark:bg-primary-800 w-[300px] sm:w-[500px] md:w-[800px] lg:w-[900px] h-[500px]
            drop-shadow-lg rounded-lg flex"
			>
				<div className="h-full hidden md:block">
					<img
						className="max-h-full rounded-l-lg object-cover"
						src="logo.png"
						alt="logo"
					/>
				</div>
                { children }
			</div>
            <div className="w-full py-4 mt-4 text-center">
                <p className="font-mono text-sm text-primary-700 dark:text-primary-200">Designed and coded by @cheeterLee 2023</p>
            </div>
		</div>
    )
}

export default AuthOutline