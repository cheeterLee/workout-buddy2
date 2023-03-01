import React from 'react'

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
    return (
        <div className='w-screen h-screen flex justify-center mt-8'>
            <div className='bg-primary-300 w-[500px] md:w-[700px] lg:w-[900px] h-[300px] md:h-[500px] lg:h-[500px]
            drop-shadow-lg rounded-md flex'>
                <div className='max-h-full'>
                    <img className='max-h-full rounded-l-md' src="logo.png" alt="logo" />
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>)
}

export default LoginPage