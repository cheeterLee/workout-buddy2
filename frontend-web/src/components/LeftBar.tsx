import React from 'react'
import { NavLink } from '.'
import { BiHome } from 'react-icons/bi'

export interface ILeftBarProps {}

const LeftBar: React.FunctionComponent<ILeftBarProps> = props => {
    return (
        <div className="hidden lg:block drop-shadow-md bg-primary-300 dark:bg-primary-600 border-primary-500 dark:border-primary-500">
            <div className='w-full h-full flex flex-col text-lg items-center justify-start gap-10'>
                <NavLink icon={<BiHome />} name='home' />
                <NavLink icon={<BiHome />} name='home' />
                <NavLink icon={<BiHome />} name='home' />
                <NavLink icon={<BiHome />} name='home' />
            </div>
            
        </div>
    )
}

export default LeftBar